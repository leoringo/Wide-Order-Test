import type React from "react";

import { OrderListContainer } from "./style.index";
import { useOrderHooks } from "./useOrderHooks";
import { Box, Grid } from "@mui/material";

import CustomButton from "../../components/CustomButton";
import TextStyle from "../../components/TextStyle";
import OrderCard from "../../components/OrderCard";
import PopupDialog from "../../components/Popup";
import PopUpAddDialog from "./__components/PopUpAdd";
import { formattedCurrency } from "../../utils/helpers";

const OrderList: React.FC = () => {
  const {
    orderList,
    onConfirmDelete,
    onClickDelete,
    onCancelDelete,
    openConfirmDeletePopup,
    closeSuccessDelete,
    openPopUpAdd,
    onClickCreate,
    onClosePopUpAdd,
    payload,
    setPayload,
    openAddConfirm,
    closeAddConfirm,
    executeAddData,
    closeSuccessAdd,
    summedGrandTotal,
    onClickEdit,
  } = useOrderHooks();

  return (
    <OrderListContainer>
      <Box p={4}>
        {/* Header and Button Create Section */}
        <Box display="flex" justifyContent="space-between">
          <TextStyle variant="h4" marginBottom={3}>
            Product List
          </TextStyle>
          <CustomButton
            variant="contained"
            sx={{ width: "80px", height: "40px", marginRight: "150px" }}
            onClick={onClickCreate}
          >
            Create
          </CustomButton>
        </Box>

        {/* Mapped Card List Section */}
        <Grid
          container
          spacing={3}
          sx={{ maxHeight: "70vh", overflowY: "auto", pr: 1 }}
        >
          {orderList.map((perOrder) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={perOrder.id}>
              <OrderCard
                onDelete={() => onClickDelete(perOrder.id)}
                onEdit={() => onClickEdit(perOrder)}
                item={perOrder}
              />
            </Grid>
          ))}
        </Grid>

        {/* Grand Total Section */}
        <Box mt={4}>
          <TextStyle variant="h5" weight="bold">
            Grand Total: {formattedCurrency(summedGrandTotal)}
          </TextStyle>
        </Box>
      </Box>

      {/* Utilities for PopUps */}
      <PopupDialog
        open={openConfirmDeletePopup.isOpen}
        type="action"
        title="WAIT!"
        description="Are you sure want to delete the data?"
        onConfirm={onConfirmDelete}
        onClose={onCancelDelete}
      />

      <PopupDialog
        open={openConfirmDeletePopup.isSuccess}
        type="success"
        title="SUCCESS!"
        description="Data deleted successfully"
        onClose={closeSuccessDelete}
      />

      <PopupDialog
        open={openPopUpAdd.isOpenConfirm}
        type="action"
        onClose={closeAddConfirm}
        onConfirm={executeAddData}
        title="WAIT!"
        description={`Are you sure want to ${openPopUpAdd.type} data?`}
      />

      <PopupDialog
        open={openPopUpAdd.isSuccess}
        type="success"
        onClose={closeSuccessAdd}
        title="SUCCESS!"
        description={`Data successfully ${openPopUpAdd.type + 'ed'}`}
      />

      <PopUpAddDialog
        open={openPopUpAdd.isOpenAdd}
        onClose={onClosePopUpAdd}
        value={payload}
        setValue={setPayload}
        handleSubmit={openAddConfirm}
        type={openPopUpAdd.type}
      />
    </OrderListContainer>
  );
};

export default OrderList;
