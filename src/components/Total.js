import { Button } from '@material-ui/core'
import accounting from 'accounting'
import React from 'react'

const useStyles = makeStyles((theme)=>({
    const Total = () => {
        return (
          <div className={classes.root}>
              <h5>Total items:3</h5>
              <h5>{accounting.formatNumber(50, "$")}</h5>
              <Button className={casses.button} variant="contained" color="secondary">Check Out</Button>
          </div>
        )
      }
}

