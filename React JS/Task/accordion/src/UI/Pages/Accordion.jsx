// import React, { useState } from 'react';
// // import './Accordion.css'; // You can style it as per your need

// const Accordion = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="accordion">
//       {items.map((item, index) => (
//         <div key={index} className="accordion-item">
//           <div className="accordion-title" onClick={() => toggleAccordion(index)}>
//             {item.title}
//           </div>
//           <div className={`accordion-body ${openIndex === index ? 'open' : 'closed'}`}>
//             {item.body}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Accordion;


import React, { useState } from 'react';
import './accordion.css'; // You can style it as per your need

const Accordion = ({ items, defaultOpenIndexes }) => {
  const [openIndexes, setOpenIndexes] = useState(defaultOpenIndexes || []);

  const toggleAccordion = (index) => {
    setOpenIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((i) => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-title" onClick={() => toggleAccordion(index)}>
            {item.title}
          </div>
          <div className={`accordion-body ${openIndexes.includes(index) ? 'open' : 'closed'}`}>
            {item.body}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
