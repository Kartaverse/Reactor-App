import React, { useState } from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Collapse,
  Grid,
  IconButton,
  AppBar,
  Toolbar,
  Button
} from '@mui/material';
import {
  PlayArrow as PlayArrowIcon,
  Stop as StopIcon,
  ExpandLess,
  ExpandMore,
  ChevronLeft,
  ChevronRight
} from '@mui/icons-material';

// Mock data for repositories
const repositoryData = [
  { id: 1, name: 'Active', type: 'repo' },
  { id: 2, name: 'Inactive', type: 'repo' }
];

// Mock data for categories
const categoryData = [
  { id: 1, name: 'Category 1', type: 'category', children: [
    { id: 11, name: 'Subcategory 1.1', type: 'subcategory' },
    { id: 12, name: 'Subcategory 1.2', type: 'subcategory' }
  ]},
  { id: 2, name: 'Category 2', type: 'category', children: [
    { id: 21, name: 'Subcategory 2.1', type: 'subcategory' },
    { id: 22, name: 'Subcategory 2.2', type: 'subcategory' }
  ]},
  { id: 3, name: 'Category 3', type: 'category' }
];

// Left Panel Component
function LeftPanel() {
  const [selectedItem, setSelectedItem] = useState(1);
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
      bgcolor: '#1e1e1e', 
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      {/* Repository Section */}
      <Box sx={{ p: 1, borderBottom: '1px solid #4a4a4a' }}>
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
          {repositoryData.map(item => (
            <ListItem 
              key={item.id}
              button
              onClick={() => handleItemClick(item.id)}
              sx={{ 
                color: selectedItem === item.id ? '#F9D129' : '#A9A8A9',
                '&:hover': { backgroundColor: 'rgba(249, 209, 41, 0.1)' },
                pl: 2,
                py: 0.5
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
                    pl: 2,
                    py: 0.5
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
                            pl: 4,
                            py: 0.5
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

// Right Panel Component
function RightPanel({ open = true }) {
  if (!open) return null;

  return (
    <Box sx={{ 
      width: 300, 
      bgcolor: '#1e1e1e', 
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      borderLeft: '1px solid #4a4a4a'
    }}>
      <Typography 
        variant="subtitle2" 
        sx={{ 
          color: '#F9D129', 
          px: 2, 
          py: 1,
          fontSize: '0.8rem',
          textTransform: 'uppercase'
        }}
      >
        Right Panel
      </Typography>
      <Divider sx={{ bgcolor: '#4a4a4a', my: 0.5 }} />
      <Box sx={{ p: 2, flex: 1, overflowY: 'auto' }}>
        <Typography variant="body2" sx={{ color: '#A9A8A9', mb: 2 }}>
          This is the right panel content area.
        </Typography>
        <Box sx={{ 
          bgcolor: '#2d2d2d', 
          p: 2, 
          borderRadius: 1,
          mb: 2 
        }}>
          <Typography variant="caption" sx={{ color: '#F9D129' }}>
            Panel Content
          </Typography>
          <Typography variant="body2" sx={{ color: '#A9A8A9', mt: 1 }}>
            Additional information and controls can go here.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// Top Bar Component
function TopBar() {
  const [rightPanelOpen, setRightPanelOpen] = useState(true);

  const toggleRightPanel = () => {
    setRightPanelOpen(!rightPanelOpen);
  };

  return (
    <AppBar 
      position="static" 
      sx={{ 
        bgcolor: '#1e1e1e', 
        height: 50,
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}
    >
      <Toolbar sx={{ p: 0, height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#F9D129', 
              ml: 2,
              fontSize: '1.2rem'
            }}
          >
            App Title
          </Typography>
        </Box>
        
        <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
          <IconButton 
            onClick={toggleRightPanel}
            sx={{ 
              color: '#A9A8A9',
              '&:hover': { backgroundColor: 'rgba(249, 209, 41, 0.1)' }
            }}
          >
            {rightPanelOpen ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

// Search Panel Component
function SearchPanel() {
  return (
    <Box sx={{ 
      bgcolor: '#2d2d2d', 
      p: 2, 
      borderBottom: '1px solid #4a4a4a',
      display: 'flex',
      alignItems: 'center'
    }}>
      <Typography variant="body2" sx={{ color: '#A9A8A9', mr: 2 }}>
        Search:
      </Typography>
      <Box sx={{ flex: 1, maxWidth: 400 }}>
        <input 
          type="text" 
          placeholder="Search repositories..."
          style={{
            width: '100%',
            padding: '8px 12px',
            borderRadius: '4px',
            border: '1px solid #4a4a4a',
            backgroundColor: '#3d3d3d',
            color: 'white'
          }}
        />
      </Box>
    </Box>
  );
}

// List Panel Component
function ListPanel() {
  return (
    <Box sx={{ 
      bgcolor: '#2d2d2d', 
      borderRadius: 1,
      p: 2,
      height: '100%',
      border: '1px solid #4a4a4a'
    }}>
      <Typography 
        variant="subtitle2" 
        sx={{ 
          color: '#F9D129', 
          mb: 2,
          fontSize: '0.9rem'
        }}
      >
        List Panel Content
      </Typography>
      <Box sx={{ 
        bgcolor: '#3d3d3d', 
        p: 2, 
        borderRadius: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography variant="body2" sx={{ color: '#A9A8A9', mb: 2 }}>
          This panel displays a list of items.
        </Typography>
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto',
          bgcolor: '#4d4d4d',
          borderRadius: 1,
          p: 2
        }}>
          <Typography variant="caption" sx={{ color: '#F9D129' }}>
            List Items
          </Typography>
          <List sx={{ p: 0 }}>
            {[1, 2, 3, 4, 5].map((item) => (
              <ListItem key={item} sx={{ p: 1, borderBottom: '1px solid #5a5a5a' }}>
                <ListItemText 
                  primary={`Item ${item}`} 
                  secondary="Description for item"
                  sx={{ color: '#A9A8A9' }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

// Details Panel Component (formerly MainPanel)
function DetailsPanel() {
  return (
    <Box sx={{ 
      bgcolor: '#2d2d2d', 
      borderRadius: 1,
      p: 2,
      height: '100%',
      border: '1px solid #4a4a4a'
    }}>
      <Typography 
        variant="subtitle2" 
        sx={{ 
          color: '#F9D129', 
          mb: 2,
          fontSize: '0.9rem'
        }}
      >
        Details Panel Content
      </Typography>
      <Box sx={{ 
        bgcolor: '#3d3d3d', 
        p: 2, 
        borderRadius: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <Typography variant="body2" sx={{ color: '#A9A8A9', mb: 2 }}>
          This panel displays detailed information.
        </Typography>
        <Box sx={{ 
          flex: 1, 
          overflowY: 'auto',
          bgcolor: '#4d4d4d',
          borderRadius: 1,
          p: 2
        }}>
          <Typography variant="caption" sx={{ color: '#F9D129' }}>
            Details
          </Typography>
          <Typography variant="body2" sx={{ color: '#A9A8A9', mt: 1 }}>
            Detailed information about the selected item would appear here.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ color: '#A9A8A9' }}>
              <strong>Properties:</strong>
            </Typography>
            <List sx={{ p: 0 }}>
              {['Property 1', 'Property 2', 'Property 3'].map((prop) => (
                <ListItem key={prop} sx={{ p: 1 }}>
                  <ListItemText 
                    primary={prop} 
                    sx={{ color: '#A9A8A9' }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

// Main App Component
function App() {
  const [rightPanelOpen, setRightPanelOpen] = useState(true);

  const toggleRightPanel = () => {
    setRightPanelOpen(!rightPanelOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar />
      
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <LeftPanel />
        
        <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <SearchPanel />
          
          {/* Top Center - List Panel */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            p: 2,
            flex: 1
          }}>
            <Box sx={{ width: '100%', maxWidth: 800 }}>
              <ListPanel />
            </Box>
          </Box>
          
          {/* Bottom Center - Details Panel */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            p: 2,
            flex: 1
          }}>
            <Box sx={{ width: '100%', maxWidth: 800 }}>
              <DetailsPanel />
            </Box>
          </Box>
        </Box>
        
        {rightPanelOpen && <RightPanel />}
      </Box>
    </Box>
  );
}

export default App;
