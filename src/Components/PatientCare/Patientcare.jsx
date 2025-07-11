import React from 'react'
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import banner from '../../assets/PatienCaring/Patientcare.png'
import tick from '../../assets/PatienCaring/tick.png'


const Patientcare = () => {

  return (
    <Box pt={2} sx={{ background: 'linear-gradient(#E7F0FF, #E8F1FF)' }}>
            <Container>
                <Box container spacing={6} alignItems='center'sx={{padding:"30px",display:"flex",justifyContent:"center",gap:"100px"}}>

                    <Box  xs={12} md={6}>
                        <Box
                            component='img'
                            src={banner}
                            sx={{
                                height:"400px",
                                width:"400px"
                            }}
                        />
                    </Box>

                    <Box  xs={12} md={6}>
                        <Typography
                            fontWeight={600}
                            color="primary.main"
                            sx={{fontSize:"30px"}}
                        >
                            HELPING PATIENTS FROM AROUND THE GLOBE!!
                        </Typography>
                        <Typography variant="h2" mb={1} mt={1}sx={{fontSize:"30px",fontWeight:"bold"}}>
                            Patient <Box component='span' color='primary.main'>Caring</Box>
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8} sx={{fontSize:"15px"}}>
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                        </Typography>

                        <List sx={{ fontSize: { xs: 12, md: 18 } }}>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={20} width={20} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Stay Updated About Your Health'
                                    primaryTypographyProps={{ fontSize: "20px", fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={20} width={20} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Check Your Results Online'
                                    primaryTypographyProps={{ fontSize: "20px", fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon sx={{ minWidth: 32 }}>
                                    <Box component='img' src={tick} height={20} width={20} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Manage Your Appointments'
                                    primaryTypographyProps={{ fontSize: "20px", fontWeight: 500, color: '#1B3C74' }}
                                />
                            </ListItem>
                        </List>

                    </Box>

                </Box>
            </Container>
        </Box>
  )
}

export default Patientcare