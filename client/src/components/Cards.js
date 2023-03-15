import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Cards({data}) {
  const [loading, setLoading] = useState(false);
  const [card, setCard] = useState([]);

  // useEffect(() => {
  //   // async function getUser() {
  //   const getUser = async () => {
  //     setLoading(true);
  //     const users = fetch("https://api.github.com/users")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCard(data);
  //         setLoading(false);
  //         console.log("asdadsasdasdasddasdd");
  //       });
  //   };
  //   getUser();
  // }, []);
  // console.log(data);
  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        data.map((users) => (
          <React.Fragment>
            <CssBaseline />
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                  <Card>
                    <CardContent>
                      <Card key={users.id} sx={{ maxWidth: 225, m: 0.5 }}>
                        <CardMedia
                          component="img"
                          // alt="green iguana"
                          height="140"
                          image={users.avatar_url}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {users.login}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button size="small">view</Button>
                        </CardActions>
                      </Card>
                    </CardContent>
                  </Card>
                </Grid>           
            </Grid>
          </React.Fragment>
        ))
      )}
    </>
  );
}
export default Cards;
