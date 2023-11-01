import React, { Fragment, useState } from "react";
import CartItem from "./CartItem";
import { Box, Button, Card, Divider, Grid, Modal, TextField } from "@mui/material";
import AddressCard from "./AddressCard";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'

const cartItems = [1, 1, 1, 1];
const addresses = [1, 1, 1];
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 4,
  };

  const initialValues = {
   tag: "",
   streetAddress: "",
   city: ""
  }

  const validationSchema = Yup.object().shape({
    streetAddress:Yup.string().required("Ingrese una dirección"),
    tag:Yup.string().required("Ingrese una etiqueta"),
    city:Yup.string().required("Una ciudad es requerida"),
  })
const Cart = () => {

    const [openAddressModal, setOpenAddressModal] = useState(false);


  const createSelectedAddressOrder = () => {
    console.log("create order");
  };

  const handleOpenAddressModal = () => {
    setOpenAddressModal(true);
    console.log("Handle Open Address Modal");
  };

  const handleSubmit = (values:any)=> {
    console.log("handle Submit",values);
    handleCloseAddressModal();
  }

  const handleCloseAddressModal= ()=> {
    setOpenAddressModal(false);
  }



  return (
    <Fragment>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 min-h-screen pt-10">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <CartItem />
            ))}
          </div>
          <Divider />
          <div className="billDetetails px-5 text-sm ">
            <p className="font-extralight py-5">Detalles de Envío</p>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Total Productos:</p>
                <p className="font-semibold">$902</p>
              </div>
              <div className="flex justify-between text-gray-400">
                <p>Costo de Envío:</p>
                <p className="font-semibold">$300</p>
              </div>
            </div>
            <Divider />
            <div className="flex justify-between text-gray-400 pt-2">
              <p>Monto total:</p>
              <p className="font-semibold">$1202</p>
            </div>
          </div>
        </section>
        <Divider orientation="vertical" flexItem />
        <section className="lg:w-[70%] px-5">
          <h1 className="text-center font-semibold text-2xl py-10">
            Elige el Domicilio de Envío
          </h1>
          <div className="flex flex-wrap justify-between">
            {addresses.map((item: any) => (
              <AddressCard
                showButton={true}
                item={item}
                handleSelectedAddress={createSelectedAddressOrder}
              />
            ))}

            <Card className="flex space-x-5 lg:w-64 m-5 p-5">
              <AddLocationAltIcon />
              <div className="space-y-3 text-gray-500">
                <h1 className="font-semibold text-lg text-white">Home</h1>
                <p>Agregar Nuevo Domicilio</p>
                <Button
                  onClick={handleOpenAddressModal}
                  sx={{ padding: ".75rem" }}
                  fullWidth
                  variant="contained"
                >
                  Agregar
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Modal open={openAddressModal} onClose={handleCloseAddressModal}>
        <Box sx={style}>
          <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          >
            <Form>
                <Grid container spacing={2}>
                    <Grid item xs={12}> 
                    <Field 
                    name="tag"
                    as={TextField}
                    label="Etiqueta"
                    fullWidth
                    variant="outlined"
                    // error={!ErrorMessage("Dirección")}
                    helperText={
                     <ErrorMessage name={"streetAddress"}>
                        {(msg)=><span className="text-red-600">{msg}</span>}
                     </ErrorMessage>   
                    }
                    />
                    </Grid>

                    <Grid item xs={12}> 
                    <Field 
                    name="streetAddress"
                    as={TextField}
                    label="Dirección"
                    fullWidth
                    variant="outlined"
                    // error={!ErrorMessage("Dirección")}
                    helperText={
                     <ErrorMessage name={"streetAddress"}>
                        {(msg)=><span className="text-red-600">{msg}</span>}
                     </ErrorMessage>   
                    }
                    />
                    </Grid>

                    <Grid item xs={12}> 
                    <Field 
                    name="city"
                    as={TextField}
                    label="Ciudad"
                    fullWidth
                    variant="outlined"
                    // error={!ErrorMessage("Dirección")}
                    helperText={
                     <ErrorMessage name={"streetAddress"}>
                        {(msg)=><span className="text-red-600">{msg}</span>}
                     </ErrorMessage>   
                    }
                    />
                    </Grid>
                    <Grid xs={12} className="mt-5 ml-5">
                        <Button type="submit" fullWidth variant="contained">Agregar Dirección</Button>
                    </Grid>
                </Grid>

           

                
            </Form>

          </Formik>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default Cart;
