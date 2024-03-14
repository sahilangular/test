import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import axios from "axios";
import toast from "react-hot-toast";
// import CloseIcon from "@mui/icons-material/Close";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(8),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(6),
  },
}));



const Model = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { handleSubmit, register, reset } =useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      level:"",
      image:""
    },
  });

  const onSubmit:SubmitHandler<FieldValues>= async(values) =>{
    try {
      const {name,description,level} = values
      const { data } = await axios.post(
    "http://localhost:8080/api/v1/course/new",
    {
      name,
      description,
      level
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (data.success) {
    toast.success(data.message);
    setOpen(false)
    reset()
  } 
} catch (err:any) {
  toast.error(err.response?.data.message || 'something wents wrong')
}
setOpen(false)
  }

  return (
    <React.Fragment>
      <Button
        style={{
          color: "white",
        }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        Add course
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        style={{
          width: "100%",
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Course
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
        <DialogContent
          dividers
          style={{
            marginBottom: "25px",
          }}
        >
          <form className="flex flex-col gap-y-5" onClick={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label>Course Name</label>
              <Input type="text" id="courseName" {...register('name',{required:true})}  placeholder="Enter course name" />
            </div>
            <div>
              <label>Course Description</label>
              <Input type="text" id="description" {...register('description',{required:true})}  placeholder="Enter description" />
            </div>
            <div>
              <label>Course Level</label>
              <Input type="text" id="level" {...register('level',{required:true})} placeholder="Enter level" />
            </div>
            <div className="flex flex-col gap-y-2">
              <label>Course image</label>
              <Input type="file" />
            </div>
            <button type="submit" className="w-full bg-purple-400 p-4 rounded-md text-white mt-2">Create Course</button>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default Model;
