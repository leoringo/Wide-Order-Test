import type React from "react";
import type { PerDummy } from "../../constant/dummy.types";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import TextStyle from "../TextStyle";
import { dateFormatter, formattedCurrency } from "../../utils/helpers";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface OrderCardProps {
  item: PerDummy;
  onEdit: () => void;
  onDelete: () => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ item, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <TextStyle
          variant="h6"
          sx={{
            wordBreak: "break-word",
            whiteSpace: "normal",
            overflowWrap: "break-word",
          }}
        >
          {item.name ?? "-"}
        </TextStyle>
        <TextStyle variant="body1">
          {formattedCurrency(item.price ?? "-")}
        </TextStyle>
        <TextStyle variant="body2">Ordered Quantity: {item.quantity}</TextStyle>
        <TextStyle variant="body2">
          Total Price: {formattedCurrency(item.quantity * item.price)}
        </TextStyle>
        <TextStyle variant="body2">Stock(s): {item.stock}</TextStyle>
        <TextStyle variant="body2">
          Ordered Date: {dateFormatter(item.date)}
        </TextStyle>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <IconButton onClick={onEdit} aria-label="edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={onDelete} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default OrderCard;
