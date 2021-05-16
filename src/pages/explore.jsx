import '@compiled/react'
import 'twin.macro'

import Post from '@/components/post'
import CircleText from '@/components/circle-and-text'
import BigCircle from '@/components/big-circle'
import Card from '@/components/card'
import Featured from '@/components/featured'
import background from '@/assets/mainBackground.jpg'
import handshake from '@/assets/handshake.png'
import friends from '@/assets/friends.png'
import idea from '@/assets/idea.png'

//MUI card component
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   expand: {
//     transform: 'rotate(0deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   },
//   expandOpen: {
//     transform: 'rotate(180deg)',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// export default function RecipeReviewCard() {
//   const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <div tw=''>
//       <div tw=''

//         title="title of post"
//         subheader="date"
//       />
//       <div
//         className={classes.media}
//         image="/static/images/cards/paella.jpg"
//         title="title of img"
//       />
//       <CardContent>
//         <div tw=''>
//           This impressive paella is a perfect party dish and a fun meal to cook together with your
//           guests. Add 1 cup of frozen peas along with the mussels, if you like.
//         </div>
//       </CardContent>

//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
//             minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
//             heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
//             browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
//             and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
//             pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
//             without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
//             medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
//             again without stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don’t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </div>
//   );
// }

export default (props) => {
  return (
    <div>
      <img />

      <div tw='container mx-auto'>

        <BigCircle />

        {/* tw='absolute bottom-20 right-56 h-56 w-56' */}
        <div tw="flex flex-row">
        <div tw='w-1/2 py-20'>
            <CircleText txt='first circle' image={handshake}/>
            <CircleText tw="w-40" reversed txt='second circle' image={idea}/>
            <CircleText txt='third circle' image={friends}/>

          </div>

          {/* <Post /> */}
          {/* <Card image='https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg'/> */}
          <Featured  />
        </div>
      </div>
    </div>
  )
}

// export default (props) => {
//   return (
//      <>
//          <Post />
//          <button tw='px-5 py-2  rounded-full shadow-lg font-semibold text-yellow-50 bg-a transform hover:bg-yellow-600 transition duration-500'>Like</button>
//          <button tw='px-5 py-2  rounded-full shadow-lg font-semibold text-yellow-50 bg-a transform hover:bg-yellow-600 transition duration-500'>Comment</button>
//          <button tw='px-5 py-2  rounded-full shadow-lg font-semibold text-yellow-50 bg-a transform hover:bg-yellow-600 transition duration-500'>Share</button>
//      </>
//   )
//  }
