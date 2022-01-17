import React from "react";
import {Box,Grid,Typography,Button} from "@material-ui/core"

export default(props)=>
<Box bgcolor="aqua">
    <Grid container>
       <Grid>
            <Box>
                <Typography variant='h4'>Open job listing app</Typography>
                <Button variant='contained'>Post a job</Button>
            </Box>
       </Grid>
    </Grid>
</Box>                             