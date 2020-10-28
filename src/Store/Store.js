const url = "http://localhost:5000"

export const getBreakfast = async () => {
  var getData = [];
  await fetch(`${url}/recipes?category=breakfast`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getData = data;
    });

  return getData;
};
