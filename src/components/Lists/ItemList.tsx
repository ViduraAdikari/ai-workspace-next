import React, {FC, PropsWithChildren} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type DrawerItem = {
  key: string
  label: string
}

type ItemListProps = {
  itemListTitle: string
  drawerItems: DrawerItem[]
  selectedItemKey?: string
  onItemClicked?: (id: string) => void
}

const ItemList: FC<ItemListProps> = (props: PropsWithChildren<ItemListProps>) => {

  const {itemListTitle, drawerItems, selectedItemKey, onItemClicked} = props;

  const handleOnItemClick = (id: string) => {
    onItemClicked && onItemClicked(id);
  }

  return (
    <Box>
      <Typography variant="caption" component="h3" sx={{
        px: 3,
        py: .5,
        my: 0,
        bgcolor: theme => theme.palette.mode === "dark" ? "#37474F" : "#CFD8DC",
      }}>
        {itemListTitle}
      </Typography>
      <List sx={{
        py: 0,
        "& .Mui-selected": {
          bgcolor: theme => theme.palette.secondary.dark + "!important",
          color: theme => theme.palette.secondary.contrastText,
          "&:hover": {
            bgcolor: theme => theme.palette.secondary.main,
          },
        },
      }}>
        {drawerItems.map((channel: DrawerItem) => {
          return (
            <ListItem key={channel.key} disablePadding
                      onClick={() => handleOnItemClick(channel.key)}>
              <ListItemButton selected={channel.key === selectedItemKey}>
                <ListItemText primary={`#${channel.label}`} sx={{px: 1}}/>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  )
};

export default ItemList;
