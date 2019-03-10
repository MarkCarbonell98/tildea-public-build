// import React from 'react';
// // import PropTypes from 'prop-types'

// const CompleteWordFeedback = props => {
    
//     let block = props.history.map((c,i) => {
//         const incorrectWords = c.incorrectWords.map((c,i) => {
//             return (
//                 <span className="ml-5 h2 bg-danger" key={c+i}>{c}</span>
//             )
//         })

//         return (
//             <div className="d-flex flex-row" key={i}>
//                 <div className="d-flex justify-content-center">
//                     <span className="h2 bg-success">{c.correctWord || null}</span>
//                     <div className="d-flex flex-column">
//                         {incorrectWords}
//                     </div>
//                 </div>
//             </div>
//         )
//     })
//     console.log(block);

//     if(block.length === 0) {
//         block = <div className="h2 bg-success">
//                     <h1 className="h2 font-weight-light">You made no mistakes!</h1>
//                 </div>
//     } 

//     return (
//         <div className="alexander pon bonita esta vaina :* container d-flex flex-row shadow mt-5">
//             {block}
//         </div>
//     )
// }

// CompleteWordFeedback.propTypes = {
//     className: PropTypes.string,
//     children: PropTypes.string,
// }

// export default CompleteWordFeedback;