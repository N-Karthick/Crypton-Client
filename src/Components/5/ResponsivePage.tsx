import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Stack, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import './ResponsivePage.scss';
import SearchIcon from '@mui/icons-material/Search';
import SegmentIcon from '@mui/icons-material/Segment';

const ResponsivePage = () => {
    return (
        <div>
            <div style={{ width: "98%", height: "60px", display: "flex", justifyContent: "space-around" }}>
                <SearchIcon sx={{ fontSize: "2.5rem" }} />
                <SegmentIcon />
            </div>
            <div style={{ position: 'relative', left: "150px" }}><Typography sx={{ width: "75px", height: "32px", backgroundColor: "blue", borderRadius: "20px", color: "white", fontSize: '1.4rem' }}>
                #Top
            </Typography></div>
            <div className="responsive-page">


                <Box className="header">
                    <Typography variant="h1" className="header-title">
                        A Responsibly As
                        <br />
                        Teach Leading,
                        <br />
                        Global Company
                    </Typography>
                    <Typography variant="h4" className="header-subtitle">
                        Creating Superior Products & Services
                    </Typography>
                </Box>

                <Box className="trust-pilot">
                    <Box sx={{ width: "100px", height: "100px", backgroundColor: "black", borderRadius: "10px" }}>
                        <StarIcon sx={{ fontSize: "6rem", color: "white" }} />
                    </Box>
                    <Typography variant="h5" className="trust-pilot-text">
                        <Typography variant="h5" className="trust-pilot-text" sx={{ fontWeight: 600, fontSize: "2rem" }}>Trust Pilot</Typography>
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp; <span style={{ color: "#00000096" }}>Rated Best</span> <span style={{ fontWeight: 600, fontSize: "2rem" }}>12.6K</span> <span style={{ color: "#00000096" }}>Reviews</span>
                    </Typography>
                </Box>

                <Card className='play-button' sx={{ width: "1100px", display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '400px' }}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={8}>
                            <CardContent
                                sx={{
                                    height: { xs: "100%", md: "345px" },
                                    borderRadius: "23px",
                                    background: 'linear-gradient(to bottom, #1010d8f0, #2e2ef2e8, #fff5f587, pink, #ffff00c9), linear-gradient(to left, blue, #b54ea778, #7b1fa2, pink, rgba(0, 0, 0, 0.14), #ffff000d, yellow)',
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: { xs: "20px", md: "0px" }
                                }}
                            >
                                <Typography variant="h5" sx={{
                                    width: "125px", height: '125px', borderRadius: "50%", backgroundColor: "#ea6bd980", display: "flex",
                                    alignItems: "center", fontWeight: 600, fontSize: '2rem', color: "white", justifyContent: "center"
                                }}>
                                    Play
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item xs={12} md={2.5}>
                            <CardContent sx={{ height: { xs: "100px", md: "345px" }, backgroundColor: 'blue', marginLeft: "25px", borderRadius: "23px", fontSize: '2rem', fontWeight: 700, display: "    ", justifyContent: 'center', alignItems: "center" }}>
                                72%
                                <CardContent sx={{ height: { xs: "30px", md: "90px" }, width: "100%", backgroundColor: 'black', borderRadius: "23px", position: "relative", left: "-16px", top: "197px", fontSize: '2rem', fontWeight: 700, color: 'white' }}>
                                    28%
                                </CardContent>
                            </CardContent>
                        </Grid>
                    </Grid>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Card>
                <Stack spacing={2} className="button-container" sx={{ marginTop: '40px', display: 'flex', alignItems: "center" }}>
                    <Button className="sign-btn" sx={{ border: "4px solid black", width: "50%", height: "70px", borderRadius: "12px" }} >
                        <Typography sx={{ fontWeight: 700, fontSize: "1.5rem", color: 'black' }}> Signup to Get 50% OFF</Typography>
                    </Button>
                    <Button sx={{ border: "4px solid black", width: "50%", height: "70px", borderRadius: "12px", backgroundColor: "black" }} >
                        <Typography sx={{ fontWeight: 700, fontSize: "1.5rem", color: 'white' }}>  Explore New Products</Typography>
                    </Button>
                </Stack>
            </div>
        </div>
    );
};

export default ResponsivePage;
