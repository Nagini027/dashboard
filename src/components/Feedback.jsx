import React from "react";

const feedbacks = [
  {
    name: "Jenny Wilson",
    avatar:
      "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
    rating: 5,
    feedback:
      "The food was excellent and so was the service. I had the main course with the side dish, which was awesome. I had a burger with veggies (gluten-free) which was also very good. They were very conscientious about gluten allergies.",
  },
  {
    name: "Dianne Russell",
    avatar:
      "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
    rating: 4,
    feedback:
      "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.",
  },
  {
    name: "Devon Lane",
    avatar:
      "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
    rating: 5,
    feedback:
      "Homemade waffles are a winner. For those who love a rustic and authentic taste!",
  },
  {
    name: "Devon Lane",
    avatar:
      "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
    rating: 5,
    feedback:
      "Homemade waffles are a winner. For those who love a rustic and authentic taste!",
  },
  {
    name: "Devon Lane",
    avatar:
      "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
    rating: 5,
    feedback:
      "Homemade waffles are a winner. For those who love a rustic and authentic taste!",
  },
  {
    name: "Devon Lane",
    avatar:
      "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
    rating: 5,
    feedback:
      "Homemade waffles are a winner. For those who love a rustic and authentic taste!",
  },
  {
    name: "Devon Lane",
    avatar:
      "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
    rating: 5,
    feedback:
      "Homemade waffles are a winner. For those who love a rustic and authentic taste!",
  },
  {
    name: "Devon Lane",
    avatar:
      "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
    rating: 5,
    feedback:
      "Homemade waffles are a winner. For those who love a rustic and authentic taste!",
  },
  {
    name: "Devon Lane",
    avatar:
      "https://images.pexels.com/photos/3348748/pexels-photo-3348748.jpeg",
    rating: 5,
    feedback:
      "Homemade waffles are a winner. For those who love a rustic and authentic taste!",
  },
];

const Feedback = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg md:max-w-md w-full ">
      <h2 className="text-lg font-semibold mb-4">Customer's Feedback</h2>
      <div className="space-y-4 overflow-y-auto max-h-96 -ml-3">
        {feedbacks.map((item, index) => (
          <div key={index} className=" space-x-4 rounded-lg">
            <div className="flex">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-9 h-9 ml-3 rounded-full"
              />

              <h3 className="font-semibold mt-1 p-1 text-sm">{item.name}</h3>
            </div>

            <div className="flex mt-1 ">
              {Array.from({ length: item.rating }, (_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.259 3.868a1 1 0 00.95.69h4.064c.969 0 1.371 1.24.588 1.81l-3.29 2.39a1 1 0 00-.364 1.118l1.258 3.868c.3.921-.755 1.688-1.54 1.118l-3.29-2.39a1 1 0 00-1.175 0l-3.29 2.39c-.784.57-1.838-.197-1.54-1.118l1.259-3.868a1 1 0 00-.364-1.118l-3.29-2.39c-.784-.57-.38-1.81.588-1.81h4.064a1 1 0 00.95-.69l1.259-3.868z" />
                </svg>
              ))}
            </div>
            <p className="text-xs ">{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
