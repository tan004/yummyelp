 const generateStars =(starNum) => {
  let stars = ''
    for(let i = 0; i < starNum; i++){
      stars += <i class="fas fa-star"></i>
  }
  return stars
}

export default generateStars;
// if(starNum === 1){
//     stars = (
//         <span className='stars'><i class="fas fa-star"></i></span>
//     )
// }else if(starNum > 1 && starNum <= 2){
//     stars = (
//         <span className='stars'><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
//     )
//     }else if(starNum > 2 && starNum <= 3){
//         stars = (
//             <span className='stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
//         )
//     }else if(starNum > 3 && starNum <= 4){
//         stars = (
//             <span className='stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
//         )
//     }else if(starNum > 4 && starNum <= 5){
//         stars = (
//             <span className='stars'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i class="fas fa-star"></i></span>
//         )
//     }else{
//         stars = (
//             <span>0</span>
//         )
//     }
