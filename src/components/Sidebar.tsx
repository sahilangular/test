import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const routes = useMemo(() => 
    [
      {
        title: "Home",
        path: "/home",
      },
      {
        title: "Course",
        path: "/course",
      },
      {
        title: "Contact",
        path: "/contact",
      },
    ]
  , []);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {routes.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>navigate(text.path)}>
              <ListItemText primary={text.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div className="bottom-5 absolute w-full p-5">
        <button onClick={()=>navigate('/dashboard')} className="w-full p-3 bg-purple-600 rounded-md hover:cursor-pointer text-white font-semibold">
            View Dashboard
        </button>
      </div>
    </Box>
  );

  return (
    <div className="m-5 w-[20%]">
      <Button onClick={toggleDrawer(true)}><GiHamburgerMenu size={26} /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Sidebar;
