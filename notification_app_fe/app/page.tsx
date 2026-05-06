"use client";

import { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Navbar from "../components/Navbar";
import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import PaginationControls from "../components/PaginationControls";
import Loader from "../components/Loader";
import ErrorState from "../components/ErrorState";

import { fetchNotifications } from "../services/api";
import { sortNotifications } from "../utils/prioritySort";
import { Log } from "../utils/logger";

export default function Home() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState("All");
  const [totalPages, setTotalPages] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      await Log("frontend", "info", "component", "Loading notifications data");
      
      const data = await fetchNotifications(page, limit, filter);
      
      // Sort notifications based on priority
      const sortedNotifications = sortNotifications(data.notifications || []);
      
      setNotifications(sortedNotifications);
      setTotalPages(data.totalPages || 1);
      setTotalCount(data.total || sortedNotifications.length);
      
      await Log("frontend", "info", "component", "Successfully loaded notifications");
    } catch (err: any) {
      setError(err.message || "Failed to fetch notifications");
      await Log("frontend", "error", "component", "Failed loading notifications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, filter]);

  const handleRefresh = () => {
    setPage(1);
    loadData();
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    setPage(1); // Reset to first page when filter changes
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1); // Reset to first page when limit changes
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <Navbar notificationCount={totalCount || notifications.length} onRefresh={handleRefresh} />

      <Container maxWidth="md" sx={{ pt: 4, pb: 8 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }} color="text.primary" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage and track your latest updates and events.
          </Typography>
        </Box>

        <FilterBar currentFilter={filter} onFilterChange={handleFilterChange} />

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorState message={error} onRetry={loadData} />
        ) : notifications.length === 0 ? (
          <Box 
            sx={{ 
              py: 8, 
              textAlign: 'center', 
              backgroundColor: 'white', 
              borderRadius: 2, 
              border: '1px dashed',
              borderColor: 'divider',
              mt: 2
            }}
          >
            <Typography variant="h6" color="text.secondary">
              No notifications found
            </Typography>
          </Box>
        ) : (
          <Box sx={{ mt: 2 }}>
            {notifications.map((notification, index) => (
              <NotificationCard
                key={notification.ID || notification.id || notification._id || index}
                notification={notification}
              />
            ))}
            
            <PaginationControls 
              page={page}
              limit={limit}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              onLimitChange={handleLimitChange}
            />
          </Box>
        )}
      </Container>
    </Box>
  );
}