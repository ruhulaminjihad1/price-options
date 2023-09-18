import PriceOption from "../PriceOption/PriceOption";

 const PriceOptions = () => {
    
    
         const PriceOptions = [
          {
            "id": 1,
            "name": "Fitness World",
            "price":"40",
            "features": [
              "Cardio Equipment",
              "Strength Training",
              "Group Fitness Classes",
              "Personal Trainers"
            ]
          },
          {
            "id": 2,
            "name": "HealthHub Gym",
            "price":"50",
            "features": [
              "Indoor Swimming Pool",
              "Yoga and Pilates",
              "Sauna and Steam Room",
              "Nutritional Counseling"
            ]
          },
          {
            "id": 3,
            "name": "PowerFit Gym",
            "price":"100",
            "features": [
              "High-Intensity Interval Training (HIIT)",
              "CrossFit",
              "Nutrition Workshops",
              "Childcare Services"
            ]
          },
          {
            "id": 4,
            "name": "FlexFit Gym",
            "price":"40",
            "features": [
              "Functional Training",
              "Spin Classes",
              "Massage Therapy",
              "Smoothie Bar"
            ]
          }
        ]
      
      
    return(
       
        <div>
<h2 className="text-5xl text-center my-4">Best Prices in the town</h2>
<div className="grid grid-col md:grid-cols-3 gap-6">
{
    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
}
 
</div>
       </div>
    )  
      
    }
 

export default PriceOptions;