import { useEffect, useState } from "react";
import { getSessionStorage, setSessionStorage } from "../../utils/helpers";

import { dataDummy, randomImage } from "../../constant/dummy";
import {
  type DataDummyInterface,
  type PerDummy,
} from "../../constant/dummy.types";

interface DeletePopUpInterface {
  isOpen: boolean;
  isSuccess: boolean;
  id: number | null;
}

interface AddPopUpInterface {
  isOpenAdd: boolean;
  isOpenConfirm: boolean;
  isSuccess: boolean;
  type: "add" | "edit";
  description: string;
}

export const useOrderHooks = () => {
  // -- useStates --
  const [orderList, setOrderList] = useState<DataDummyInterface>([]);
  const [payload, setPayload] = useState<Partial<PerDummy>>({});
  const [openConfirmDeletePopup, setOpenConfirmDeletePopup] =
    useState<DeletePopUpInterface>({
      isOpen: false,
      isSuccess: false,
      id: null,
    });
  const [openPopUpAdd, setOpenPopUpAdd] = useState<AddPopUpInterface>({
    isOpenAdd: false,
    isOpenConfirm: false,
    isSuccess: false,
    type: "add",
    description: "",
  });

  // -- functions --
  const updateOrders = (newList: DataDummyInterface) => {
    setOrderList(newList);
    setSessionStorage("orders", newList);
  };

  const onClickDelete = (id: number) => {
    setOpenConfirmDeletePopup({ isOpen: true, isSuccess: false, id });
  };

  const onCancelDelete = () => {
    setOpenConfirmDeletePopup({ isOpen: false, isSuccess: false, id: null });
  };

  const onConfirmDelete = () => {
    const newDummy = orderList.filter(
      (perOrder) => perOrder.id !== openConfirmDeletePopup.id
    );
    setOpenConfirmDeletePopup({ isOpen: false, isSuccess: true, id: null });

    updateOrders(newDummy);
  };

  const closeSuccessDelete = () => {
    setOpenConfirmDeletePopup({ isOpen: false, isSuccess: false, id: null });
  };

  const onClickCreate = () => {
    setOpenPopUpAdd((prev) => ({ ...prev, isOpenAdd: true }));
  };

  const onClickEdit = (data: PerDummy) => {
    setPayload(data);
    setOpenPopUpAdd((prev) => ({ ...prev, isOpenAdd: true, type: "edit" }));
  };

  const onClosePopUpAdd = () => {
    setOpenPopUpAdd((prev) => ({
      ...prev,
      isOpenAdd: false,
      type: "add",
      description: "",
    }));
    setPayload({});
  };

  const openAddConfirm = () => {
    setOpenPopUpAdd((prev) => ({
      ...prev,
      isOpenConfirm: true,
      description: openPopUpAdd.type === "add" ? "add" : "edit",
    }));
  };

  const closeAddConfirm = () => {
    setOpenPopUpAdd((prev) => ({
      ...prev,
      isOpenConfirm: false,
      description: "add",
    }));
  };

  const executeAddData = () => {
    setOpenPopUpAdd((prev) => ({
      ...prev,
      isOpenConfirm: false,
      isSuccess: true,
    }));
    const currentList = getSessionStorage("orders") as DataDummyInterface;
    if (openPopUpAdd.type === "edit" && payload.id != null) {
      // !! -- FOR EDIT PURPOSES --
      const updatedList = currentList.map((item) =>
        item.id === payload.id ? { ...item, ...payload } : item
      );
      updateOrders(updatedList);
    } else {
      // !! -- FOR ADD PURPOSES --
      const maxId = currentList.reduce(
        // -- making unique ID
        (max, item) => Math.max(max, item.id),
        0
      );
      const newId = maxId + 1;

      currentList.push({
        ...(payload as PerDummy),
        id: newId,
        image: randomImage,
        date: new Date(),
      });
      updateOrders(currentList);
    }
  };

  const closeSuccessAdd = () => {
    setOpenPopUpAdd({
      isOpenAdd: false,
      isOpenConfirm: false,
      isSuccess: false,
      type: "add",
      description: "",
    });
    setPayload({});
  };

  // -- deconstruct the quantity and price from each order and sum it
  const summedGrandTotal = orderList.reduce((acc, { quantity, price }) => {
    return acc + quantity * price;
  }, 0);

  // -- useEffects --
  useEffect(() => {
    const storedOrders = getSessionStorage("orders") as DataDummyInterface;
    if (storedOrders) {
      setOrderList(storedOrders);
    } else {
      updateOrders(dataDummy);
    }
  }, []);

  return {
    orderList,
    onClickDelete,
    onConfirmDelete,
    openConfirmDeletePopup,
    onCancelDelete,
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
  };
};
