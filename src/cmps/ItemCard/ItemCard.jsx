import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import imgPlaceholder from '../../assests/image_placeholder.jpg'
import mediaService from '../../service/media.service';
import { useCallback } from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export function ItemCard({ item }) {
    const classes = useStyles();
    const [itemDetails, setItemDetails] = useState()

    const loadCurrItem = useCallback(
        async () => {
            const currItem = await mediaService.getItemById(item.imdbID)
            setItemDetails(currItem)
        }, [item.imdbID],
    )


    const itemPlot = () => {
        return itemDetails?.Plot !== 'N/A' ? itemDetails?.Plot.substring(0, 200) : 'Plot is N/A'
    }


    useEffect(() => {
        loadCurrItem()
    }, [loadCurrItem])




    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.Poster !== 'N/A' ? item.Poster : imgPlaceholder}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.Title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {itemPlot()}...
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}


ItemCard.propTypes = {
    item: PropTypes.object,
};