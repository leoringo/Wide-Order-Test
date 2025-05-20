import type React from "react";
import { useState, type ChangeEvent, type SetStateAction } from "react";
import { Box, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import type { PerDummy } from "../../../constant/dummy.types";

import PopupDialog from "../../../components/Popup";
import InputText from "../../../components/InputText";
import CustomButton from "../../../components/CustomButton";

interface PopUpAddDialogInterface {
  open: boolean;
  value: Partial<PerDummy>;
  setValue: React.Dispatch<SetStateAction<Partial<PerDummy>>>;
  onClose: () => void;
  handleSubmit: () => void;
  type: "add" | "edit";
}

const PopUpAddDialog: React.FC<PopUpAddDialogInterface> = ({
  open,
  onClose,
  value,
  setValue,
  handleSubmit,
  type,
}) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    // for validating before handleSubmit
    const newErrors: Record<string, string> = {};

    const name = value.name?.trim();
    const price = Number(value.price);
    const quantity = Number(value.quantity);
    const stock = Number(value.stock);

    if (!name) {
      newErrors.name = "Product name is required";
    }

    if (isNaN(price) || price <= 0) {
      newErrors.price = "Price must be greater than 0";
    }

    if (isNaN(quantity) || quantity < 0) {
      newErrors.quantity = "Quantity must be 0 or more";
    }

    if (isNaN(stock) || stock < 0) {
      newErrors.stock = "Stock must be 0 or more";
    }

    if (quantity > stock) {
      newErrors.quantity = "Quantity cannot exceed stock";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOnChangeValue = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof PerDummy
  ) => {
    setValue((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleForm = () => {
    if (validate()) {
      handleSubmit();
    }
  };

  return (
    <PopupDialog
      open={open}
      type="custom"
      onClose={onClose}
      title={type === "add" ? "Add Product" : "Edit Product"}
    >
      <DialogTitle>
        {type === "add" ? "Add New Product" : "Edit Product"}
      </DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <InputText
            label="Product Name"
            fullWidth
            value={value.name}
            onChange={(event) => handleOnChangeValue(event, "name")}
            error={!!errors.name}
            helperText={errors.name}
          />
          <InputText
            label="Price per Unit"
            type="number"
            fullWidth
            value={value.price}
            inputMode="numeric"
            onChange={(event) => handleOnChangeValue(event, "price")}
            error={!!errors.price}
            helperText={errors.price}
          />
          <InputText
            label="Quantity"
            type="number"
            fullWidth
            value={value.quantity}
            inputMode="numeric"
            onChange={(event) => handleOnChangeValue(event, "quantity")}
            error={!!errors.quantity}
            helperText={errors.quantity}
          />
          <InputText
            label="Stock"
            type="number"
            fullWidth
            value={value.stock}
            inputMode="numeric"
            onChange={(event) => handleOnChangeValue(event, "stock")}
            error={!!errors.stock}
            helperText={errors.stock}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <CustomButton onClick={onClose} variant="outlined">
          Cancel
        </CustomButton>
        <CustomButton onClick={handleForm} variant="contained">
          Submit
        </CustomButton>
      </DialogActions>
    </PopupDialog>
  );
};

export default PopUpAddDialog;
