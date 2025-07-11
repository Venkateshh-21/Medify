import React from 'react'
import { Stack,Box,Typography } from '@mui/material'
import img from "../../assets/blogs.png"
const Blogs = () => {
  return (
    <Stack pt={1} spacing={2}component={"div"} alignItems={"center"} sx={{backgroundColor:"white"}}>
          <Typography color='primary.main' variant='h5' sx={{fontWeight:"bold",fontSize:"15px"}}>
            Blog & News
          </Typography>
          <Typography color='primary.secondary' sx={{fontSize:"30px"}}>Read Our Latest News</Typography>

        <Box src={img} component={"img"} />
    </Stack>
  )
}

export default Blogs