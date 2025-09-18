import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
  Container,
  Grid,
  Collapse
} from '@mui/material';
import {
  Folder as FolderIcon,
  PlayArrow as PlayArrowIcon,
  Stop as StopIcon,
  ExpandLess,
  ExpandMore
} from '@mui/icons-material';

// Sample data - replace with your actual data
const categoryData = [
  {
    id: 'repo1',
    name: 'Repository 1',
    type: 'repository',
    icon: 'folder'
  },
  {
    id: 'repo2',
    name: 'Repository 2',
    type: 'repository',
    icon: 'folder'
  },
  {
    id: 'active',
    name: 'Active',
    type: 'state'
  },
  {
    id: 'inactive',
    name: 'Inactive',
    type: 'state'
  },
  {
    id: 'category1',
    name: 'Category 1',
    type: 'category',
    children: [
      {
        id: 'subcat1',
        name: 'Subcategory 1',
        type: 'subcategory'
      },
      {
        id: 'subcat2',
        name: 'Subcategory 2',
        type: 'subcategory'
      }
    ]
  },
  {
    id: 'category2',
    name: 'Category 2',
    type: 'category',
    children: [
      {
        id: 'subcat3',
        name: 'Subcategory 3',
        type: 'subcategory'
      }
    ]
  }
];

function LeftDockPanel() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [openCategories, setOpenCategories] = useState({});

  const handleItemClick = (id) => {
    setSelectedItem(id);
  };

  const handleCategoryClick = (id) => {
    setOpenCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <Box sx={{ 
      width: 250, 
      height: '100vh', 
      bgcolor: '#1a1a1a', 
      display: 'flex',
      flexDirection: 'column',
      borderRight: '1px solid #4a4a4a'
    }}>
      {/* Repositories Section */}
      <Box sx={{ p: 1, flex: 1, overflowY: 'auto' }}>
        <Typography 
          variant="subtitle2" 
          sx={{ 
            color: '#F9D129', 
            px: 1, 
            py: 0.5,
            fontSize: '0.8rem',
            textTransform: 'uppercase'
          }}
        >
          Repositories
        </Typography>
        <Divider sx={{ bgcolor: '#4a4a4a', my: 0.5 }} />
        <List dense>
          {categoryData
            .filter(item => item.type === 'repository')
            .map(item => (
              <ListItem 
                key={item.id}
                button
                onClick={() => handleItemClick(item.id)}
                sx={{ 
                  color: selectedItem === item.id ? '#F9D129' : '#A9A8A9',
                  '&:hover': { backgroundColor: 'rgba(249, 209, 41, 0.1)' },
                  pl: 2
                }}
              >
                <FolderIcon sx={{ mr: 1, fontSize: 16 }} />
                <ListItemText primary={item.name} sx={{ fontSize: '0.8rem' }} />
              </ListItem>
            ))}
        </List>
      </Box>

      <Divider sx={{ bgcolor: '#4a4a4a' }} />

      {/* States Section */}
      <Box sx={{ p: 1, flex: 1, overflowY: 'auto' }}>
        <Typography 
          variant="subtitle2" 
          sx={{ 
            color: '#F9D129', 
            px: 1, 
            py: 0.5,
            fontSize: '0.8rem',
            textTransform: 'uppercase'
          }}
        >
          States
        </Typography>
        <Divider sx={{ bgcolor: '#4a4a4a', my: 0.5 }} />
        <List dense>
          {categoryData
            .filter(item => item.type === 'state')
            .map(item => (
              <ListItem 
                key={item.id}
                button
                onClick={() => handleItemClick(item.id)}
                sx={{ 
                  color: selectedItem === item.id ? '#F9D129' : '#A9A8A9',
                  '&:hover': { backgroundColor: 'rgba(249, 209, 41, 0.1)' },
                  pl: 2
                }}
              >
                {item.name === 'Active' ? (
                  <PlayArrowIcon sx={{ mr: 1, fontSize: 16 }} />
                ) : (
                  <StopIcon sx={{ mr: 1, fontSize: 16 }} />
                )}
                <ListItemText primary={item.name} sx={{ fontSize: '0.8rem' }} />
              </ListItem>
            ))}
        </List>
      </Box>

      <Divider sx={{ bgcolor: '#4a4a4a' }} />

      {/* Category Section with Collapsible Items */}
      <Box sx={{ p: 1, flex: 1, overflowY: 'auto' }}>
        <Typography 
          variant="subtitle2" 
          sx={{ 
            color: '#F9D129', 
            px: 1, 
            py: 0.5,
            fontSize: '0.8rem',
            textTransform: 'uppercase'
          }}
        >
          Categories
        </Typography>
        <Divider sx={{ bgcolor: '#4a4a4a', my: 0.5 }} />
        <List dense>
          {categoryData
            .filter(item => item.type === 'category')
            .map(item => (
              <React.Fragment key={item.id}>
                <ListItem 
                  button
                  onClick={() => handleCategoryClick(item.id)}
                  sx={{ 
                    color: selectedItem === item.id ? '#F9D129' : '#A9A8A9',
                    '&:hover': { backgroundColor: 'rgba(249, 209, 41, 0.1)' },
                    pl: 2
                  }}
                >
                  <ListItemText primary={item.name} sx={{ fontSize: '0.8rem' }} />
                  {item.children ? (
                    openCategories[item.id] ? <ExpandLess /> : <ExpandMore />
                  ) : null}
                </ListItem>
                
                {item.children && (
                  <Collapse in={openCategories[item.id]} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {item.children.map(child => (
                        <ListItem 
                          key={child.id}
                          button
                          onClick={() => handleItemClick(child.id)}
                          sx={{ 
                            color: selectedItem === child.id ? '#F9D129' : '#A9A8A9',
                            '&:hover': { backgroundColor: 'rgba(249, 209, 41, 0.1)' },
                            pl: 4
                          }}
                        >
                          <ListItemText primary={child.name} sx={{ fontSize: '0.7rem' }} />
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                )}
              </React.Fragment>
            ))}
        </List>
      </Box>
    </Box>
  );
}

function TopBar() {
  return (
    <Box sx={{ 
      bgcolor: '#2a2a2a', 
      p: 2, 
      borderRadius: 1, 
      mb: 3,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Typography variant="h6" sx={{ color: '#F9D129' }}>
        Top Bar Content
      </Typography>
    </Box>
  );
}

function SearchPanel() {
  return (
    <Box sx={{ 
      bgcolor: '#2a2a2a', 
      p: 2, 
      borderRadius: 1,
      height: '100%'
    }}>
      <Typography variant="h6" sx={{ color: '#F9D129', mb: 2 }}>
        Search Panel
      </Typography>
      <Box sx={{ bgcolor: '#3a3a3a', p: 2, borderRadius: 1 }}>
        <Typography variant="body2" sx={{ color: '#A9A8A9' }}>
          Search functionality would go here
        </Typography>
      </Box>
    </Box>
  );
}

function MainPanel() {
  return (
    <Box sx={{ 
      bgcolor: '#2a2a2a', 
      p: 2, 
      borderRadius: 1,
      height: '100%'
    }}>
      <Typography variant="h6" sx={{ color: '#F9D129', mb: 2 }}>
        Main Panel
      </Typography>
      <Box sx={{ bgcolor: '#3a3a3a', p: 2, borderRadius: 1 }}>
        <Typography variant="body2" sx={{ color: '#A9A8A9' }}>
          Main content area
        </Typography>
      </Box>
    </Box>
  );
}

function ListPanel() {
  return (
    <Box sx={{ 
      bgcolor: '#2a2a2a', 
      p: 2, 
      borderRadius: 1,
      height: '100%'
    }}>
      <Typography variant="h6" sx={{ color: '#F9D129', mb: 2 }}>
        List Panel
      </Typography>
      <Box sx={{ bgcolor: '#3a3a3a', p: 2, borderRadius: 1 }}>
        <Typography variant="body2" sx={{ color: '#A9A8A9' }}>
          List content would go here
        </Typography>
      </Box>
    </Box>
  );
}

function DetailsPanel() {
  return (
    <Box sx={{ 
      bgcolor: '#2a2a2a', 
      p: 2, 
      borderRadius: 1,
      height: '100%'
    }}>
      <Typography variant="h6" sx={{ color: '#F9D129', mb: 2 }}>
        Details Panel
      </Typography>
      <Box sx={{ bgcolor: '#3a3a3a', p: 2, borderRadius: 1 }}>
        <Typography variant="body2" sx={{ color: '#A9A8A9' }}>
          Details content would go here
        </Typography>
      </Box>
    </Box>
  );
}

function App() {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Docked Panel */}
      <LeftDockPanel />
      
      {/* Main Content Area */}
      <Box sx={{ 
        flexGrow: 1, 
        ml: 250, // Width of docked panel
        height: '100vh',
        overflow: 'auto'
      }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" sx={{ color: '#F9D129' }}>
              Application Title
            </Typography>
          </Box>
          
          {/* Top Bar */}
          <TopBar />
          
          <Grid container spacing={3}>
            {/* Search Panel */}
            <Grid item xs={12} md={4}>
              <SearchPanel />
            </Grid>
            
            {/* Main Panel */}
            <Grid item xs={12} md={8}>
              <MainPanel />
            </Grid>
            
            {/* List Panel */}
            <Grid item xs={12}>
              <ListPanel />
            </Grid>
            
            {/* Details Panel */}
            <Grid item xs={12}>
              <DetailsPanel />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
