// import React from "react";
// import SingleNews from "./SingleNews";
// // import { instance } from "./../../API/api";
// import { connect } from "react-redux";
// // import { setNewsSingle } from "./../../_redux/SingleNews-reduser";
// import { useParams } from "react-router-dom";
// import { setNewsSingle } from './../../redux/SingleNews';
// const withRouter = (WrappedComponent) => (props) => {
//   const params = useParams();
//   return <WrappedComponent {...props} params={params} />;
// };
// class SingleCompanenty extends React.Component {
//   componentDidMount() {
//     let userId = this.props.params.userId;
// //     instance
// //       .get("mainNews/" + userId)
// //       .then((response) => this.props.setNewsSingle(response.data));
//   }
//   render() {
//     return (
//       <div>
//         <SingleNews  />
//       </div>
//     );
//   }
// }
// let mapStateToProps = (state) => ({
//   news: state.news.news,
// });
// let WithDataContainerComponent = withRouter(SingleCompanenty);
// export default connect(mapStateToProps, { setNewsSingle })(
//   WithDataContainerComponent
// );
