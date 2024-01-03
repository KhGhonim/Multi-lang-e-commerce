import { ExpandMore } from '@mui/icons-material'
import { Box, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material'
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function TitleOfThe3NavBar({Title}) {
  return (
    <Box>
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{
        position: "relative",
        ":hover .BoxOfThePaper": { display: "block" },
        ":hover": { cursor: "pointer" },
      }}
    >
      <Typography
        variant="body1"
        color="inherit"
        sx={{ fontWeight: "bolder" }}
      >
        {Title}
      </Typography>
      <ExpandMore fontSize="small" />

      <Box
        className="BoxOfThePaper"
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
          zIndex: 20
        }}
      >
        <Paper sx={{ minWidth: 200, mt: 1 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem
                sx={{ ":hover .muidashboard": { display: "block" } }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    display: "flex",
                    p: 0,
                    px: 1,
                    fontSize: 15,
                    position: "relative",
                  }}
                >
                  <ListItemText
                    primary="Dashboard"
                    sx={{ ".MuiTypography-root": { fontWeight: 500 } }}
                  />
                  <Box flexGrow={1} />
                  <IconButton aria-label="">
                    <KeyboardArrowRightIcon />
                  </IconButton>
                </ListItemButton>
                <Box
                  sx={{
                    position: "absolute",
                    left: "100%",
                    top: 0,
                    display: "none",
                  }}
                  className="muidashboard"
                >
                  <Paper
                    sx={{
                      ml: 1,
                      minWidth: 150,
                    }}
                  >
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton sx={{ p: 0, px: 1 }}>
                            <ListItemText primary="Trash" />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton
                            component="a"
                            href="#simple-list"
                            sx={{ p: 0, px: 1 }}
                          >
                            <ListItemText primary="Spam" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ display: "flex", p: 0, px: 1, fontSize: 15 }}
                  component="a"
                  href="#simple-list"
                >
                  <ListItemText primary="Products" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ display: "flex", p: 0, px: 1, fontSize: 15 }}
                  component="a"
                  href="#simple-list"
                >
                  <ListItemText primary="Orders" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ display: "flex", p: 0, px: 1, fontSize: 15 }}
                  component="a"
                  href="#simple-list"
                >
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Stack>
  </Box>
  )
}

export default TitleOfThe3NavBar