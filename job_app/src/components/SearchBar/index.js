import React from "react";
import {Box,Button,Select,MenuItem} from "@material-ui/core"

export default props=>{
    return <>
        <Box>
            <Select defaultValue="Full time">
                <MenuItem value="Full time">Full time</MenuItem>
                <MenuItem value="Freelancing">Freelancing</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
            </Select>
            <Button variant='contained'>
                Search
            </Button>
        </Box>
    </>
}