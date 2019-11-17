import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {
  CartDescriptionContainer,
  CloseButton,
  Container,
  Spacing,
  TextBold,
  SpacingRight,
} from '../../styles/ProductDescription';
import { Products } from '../../store/ducks/products/types';

interface OwnProps {
  product: Products;
  showDescription: boolean;
  handleClose: () => void;
}

const useStyles = makeStyles({
  media: {
    height: 100,
    'background-size': 100,
  },
});

const ProductDescription = (props: OwnProps) => {
  const { product, showDescription, handleClose } = props;
  const classes = useStyles();
  return (
    <CartDescriptionContainer showDescription={showDescription}>
      <Container>
        <Card>
          <CardContent>
            <Spacing>
              <CardMedia className={classes.media} image={product.picture} title={product.title} />
              <Typography gutterBottom variant="h6" component="h2">
                {product.title}
              </Typography>
            </Spacing>
            <Divider variant="middle" />
            <Spacing>
              <Typography variant="body2" color="textSecondary" component="p">
                <TextBold>Descrição:</TextBold>
                {product.description}
              </Typography>
            </Spacing>
            <Divider variant="middle" />
            <Spacing>
              <SpacingRight>
                <Chip label={product.brand} />
              </SpacingRight>
              <SpacingRight>
                <Chip label={product.memory} />
              </SpacingRight>
              <SpacingRight>
                <Chip label={product.chipType} />
              </SpacingRight>
              <SpacingRight>
                <Chip label={`Em Estoque: ${product.quantity}`} />
              </SpacingRight>
            </Spacing>
          </CardContent>
        </Card>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
      </Container>
    </CartDescriptionContainer>
  );
};

export default ProductDescription;
