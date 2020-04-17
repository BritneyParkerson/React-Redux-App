// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchRecipes } from "../actions";
// import Recipes from "./Recipes";

// export const PuppyRecipes = props => {
//   useEffect(() => {
//     props.fetchRecipes();
//   }, );
//   if (props.isFetching) {
//     return <h2>Loading...</h2>;
//   }
//   return (
//     <div>
//       {props.error && <p>{props.error}</p>}
//       {props.puppyRecipes.map(info => (
//         <Recipes key={info.recipe_id} info={info} />
//       ))}
//     </div>
//   );
// };

// const StateToProps = state => {
//   return {
//     puppyRecipes: state.puppyRecipes,
//     isFetching: state.isFetching,
//     error: state.error
//   };
// };

// export default connect(
//   StateToProps,
//   { fetchRecipes }
// )(PuppyRecipes);