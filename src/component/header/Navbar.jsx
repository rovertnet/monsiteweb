
import { useState } from "react";
import logo from "../../assets/image/mon_logo.png";
import { MdMenu } from "react-icons/md";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { IoHome } from "react-icons/io5";
import { AccountBox, AssistWalker, AutoStories, Home, Lightbulb } from "@mui/icons-material";



export default function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="fixed bottom-0 md:bottom-0 left-0 right-0 bg-white/20 md:bg-white/20 px-5 py-2 md:px-5 md:py-2 mx-6 md:mx-96 my-5 md:my-5 shadow-md rounded-full md:rounded-3xl">
        <div className="flex justify-between items-center">
          <img src={logo} alt={logo} className="w-9 md:w-10 md:h-10 h-9" />
          <button
            className="bg-slate-900 border-[1px] border-slate-300 px-2 py-2 rounded-full "
            onClick={handleClick}
          >
            <MdMenu size={22} className="text-slate-200" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="md:hidden">
        <div className="menu bottom-10">
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    bottom: 19,
                    right: 5,
                    left: 20,
                    width: 10,
                    height: 10,
                    zIndex: 0,
                  },
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "bottom" }}
            anchorOrigin={{ horizontal: "right", vertical: "" }}
            className="px-5 md:px-5 py-3 md:py-3"
          >
            <MenuItem onClick={handleClose} className="flex space-x-3">
              <Home /> Accueil
            </MenuItem>
            <MenuItem onClick={handleClose} className="flex space-x-3">
              <AccountBox /> A propos
            </MenuItem>

            <MenuItem onClick={handleClose} className="flex space-x-3">
              <AssistWalker /> Services
            </MenuItem>

            <MenuItem onClick={handleClose} className="flex space-x-3">
              <Lightbulb /> Projets
            </MenuItem>

            <MenuItem onClick={handleClose} className="flex space-x-3">
              <AutoStories /> Compétences
            </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
}
