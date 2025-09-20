import React, { useState, useMemo } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// ListPanel Component
function ListPanel() {
  const checkboxes = [
    "images/Checkbox=On.png",
    "images/Checkbox=Checkbox=Downloading.png",
    "images/Checkbox=In Progress.png",
    "images/Checkbox=Off.png",
  ];

  function createData(install, name, category, version, author, date, status, donation, id) {
    return { install, name, category, version, author, date, status, donation, id };
  }

  const [rows, setRows] = useState([
    createData("Checkbox=On.png",'KickAss ShaderZ', 'Shaders', '1.21', 'Andromeda Girl', '2023-04-14', 'Installed', 'No', "com.wesuckless.KickAssShaderZ"),
    createData("Checkbox=On.png",'KickAss ShaderZ Menus', 'Shaders', '1.21', 'Andromeda Girl', '2023-04-14', 'Installed', 'No', "com.wesuckless.KickAssShaderZ.Menus"),
    createData("Checkbox=On.png", 'Shadertoys', 'Shaders', '2.0', 'JiPi', '2024-07-15', 'Installed', 'No', "com.JiPi.Shadertoys"),
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedRows = useMemo(() => {
    if (!sortConfig.key) return rows;

    return [...rows].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }, [rows, sortConfig]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ height: '50%', minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#373838' }}>
            <TableCell align="left"></TableCell>
            <TableCell
              align="left"
              sx={{ color: '#F9D129', cursor: 'pointer' }}
              onClick={() => handleSort('name')}
            >
              <Box display="flex" alignItems="center">
                Name
                {sortConfig.key === 'name' && (
                  <Box ml={1}>
                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </Box>
                )}
              </Box>
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: '#F9D129', cursor: 'pointer' }}
              onClick={() => handleSort('category')}
            >
              <Box display="flex" alignItems="center">
                Category
                {sortConfig.key === 'category' && (
                  <Box ml={1}>
                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </Box>
                )}
              </Box>
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: '#F9D129', cursor: 'pointer' }}
              onClick={() => handleSort('version')}
            >
              <Box display="flex" alignItems="center">
                Version
                {sortConfig.key === 'version' && (
                  <Box ml={1}>
                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </Box>
                )}
              </Box>
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: '#F9D129', cursor: 'pointer' }}
              onClick={() => handleSort('author')}
            >
              <Box display="flex" alignItems="center">
                Author
                {sortConfig.key === 'author' && (
                  <Box ml={1}>
                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </Box>
                )}
              </Box>
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: '#F9D129', cursor: 'pointer' }}
              onClick={() => handleSort('date')}
            >
              <Box display="flex" alignItems="center">
                Date
                {sortConfig.key === 'date' && (
                  <Box ml={1}>
                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </Box>
                )}
              </Box>
            </TableCell>
            <TableCell
              align="left"
              sx={{ color: '#F9D129', cursor: 'pointer' }}
              onClick={() => handleSort('status')}
            >
              <Box display="flex" alignItems="center">
                Status
                {sortConfig.key === 'status' && (
                  <Box ml={1}>
                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </Box>
                )}
              </Box>
            </TableCell>
            <TableCell
              align="center"
              sx={{ color: '#F9D129', cursor: 'pointer' }}
              onClick={() => handleSort('donation')}
            >
              <Box display="flex" alignItems="center">
                Donation
                {sortConfig.key === 'donation' && (
                  <Box ml={1}>
                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </Box>
                )}
              </Box>
            </TableCell>
            <TableCell
              align="right"
              sx={{ color: '#F9D129', cursor: 'pointer' }}
              onClick={() => handleSort('id')}
            >
              <Box display="flex" alignItems="center">
                ID
                {sortConfig.key === 'id' && (
                  <Box ml={1}>
                    {sortConfig.direction === 'asc' ? '↑' : '↓'}
                  </Box>
                )}
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                backgroundColor: sortedRows.indexOf(row) % 2 === 0 ? '#2D2D2E' : '#373636',
                '& .MuiTableCell-root': {
                  color: '#A9A8A9'
                }
              }}
            >
              <TableCell align="left">
                <img src={row.install} alt={`Status: ${row.status}`} />
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.version}</TableCell>
              <TableCell align="left">{row.author}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.donation ? 'Yes' : 'No'}</TableCell>
              <TableCell align="left">{row.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Other components remain the same as in your original code
function DetailsPanel() {
  return (
    <Box sx={{ 
      p: 2, 
      backgroundColor: '#373838',
      borderRadius: '4px',
      height: '100%'
    }}>
      <Typography variant="h6" sx={{ color: '#F9D129' }}>
        Details Panel
      </Typography>
      <Typography variant="body1" sx={{ color: '#A9A8A9' }}>
        This is where detailed information about the selected item would appear.
      </Typography>
    </Box>
  );
}

function RightPanel() {
  return (
    <Box sx={{ 
      width: 300, 
      backgroundColor: '#2D2D2E',
      p: 2,
      height: '100%',
      borderLeft: '1px solid #444'
    }}>
      <Typography variant="h6" sx={{ color: '#F9D129' }}>
        Right Panel
      </Typography>
      <Typography variant="body1" sx={{ color: '#A9A8A9' }}>
        This is the right panel content. You can add additional controls or information here.
      </Typography>
    </Box>
  );
}

function App() {
  const [leftPanelOpen, setLeftPanelOpen] = useState(true);
  const [rightPanelOpen, setRightPanelOpen] = useState(true);

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      backgroundColor: '#1e1e1e'
    }}>
      {/* Top Bar */}
      <AppBar position="static" sx={{ backgroundColor: '#2D2D2E' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#F9D129' }}>
            App Title
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => setRightPanelOpen(!rightPanelOpen)}
          >
            {rightPanelOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left Panel */}
        {leftPanelOpen && (
          <Box sx={{ 
            width: 250, 
            backgroundColor: '#2D2D2E',
            p: 2,
            borderRight: '1px solid #444'
          }}>
            <Typography variant="h6" sx={{ color: '#F9D129' }}>
              Repositories
            </Typography>
            <List>
              <ListItem button>
                <ListItemText primary="Repository 1" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Repository 2" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Repository 3" />
              </ListItem>
            </List>
            <Divider />
            <Typography variant="h6" sx={{ color: '#F9D129', mt: 2 }}>
              Categories
            </Typography>
            <List>
              <ListItem button>
                <ListItemText primary="Shaders" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Mods" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Tools" />
              </ListItem>
            </List>
          </Box>
        )}

        {/* Center Content */}
        <Box sx={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          p: 2,
          overflow: 'auto'
        }}>
          <Box sx={{ 
            flex: 1, 
            mb: 2,
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Typography variant="h6" sx={{ color: '#F9D129', mb: 1 }}>
              List Panel
            </Typography>
            <Box sx={{ flex: 1, overflow: 'auto' }}>
              <ListPanel />
            </Box>
          </Box>
          
          {/* Details Panel */}
          <Box sx={{ 
            flex: 1, 
            height: '50%',
            mb: 2
          }}>
            <DetailsPanel />
          </Box>
        </Box>

        {/* Right Panel */}
        {rightPanelOpen && (
          <RightPanel />
        )}
      </Box>
    </Box>
  );
}

export default App;
