


// // import React, { useState } from 'react';
// // import { Container, Row, Col, Nav, Button, Offcanvas } from 'react-bootstrap';
// // import { Outlet, Link } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { FaShoppingCart, FaList, FaHome } from 'react-icons/fa';

// // const Dashboard = () => {
// //   const [showSidebar, setShowSidebar] = useState(false);

// //   const toggleSidebar = () => setShowSidebar(!showSidebar);

// //   return (
// //     <Container fluid>
// //       <Row className="min-vh-100">
// //         {/* Sidebar for large screens */}
// //         <Col md={3} lg={2} className="d-none d-md-block bg-light p-0 sidebar">
// //           <Nav className="flex-column p-3">
// //             <Nav.Item>
// //               <Nav.Link as={Link} to="/dashboard/carts" className="text-secondary">
// //                 <FaShoppingCart className="me-2" />
// //                 Cart
// //               </Nav.Link>
// //             </Nav.Item>
// //             <Nav.Item>
// //               <Nav.Link as={Link} to="/dashboard/paymenthistory" className="text-secondary">
// //                 <FaList className="me-2" />
// //                 Payment History
// //               </Nav.Link>
// //             </Nav.Item>
// //             <Nav.Item>
// //               <Nav.Link as={Link} to="/" className="text-secondary">
// //                 <FaHome className="me-2" />
// //                 Home
// //               </Nav.Link>
// //             </Nav.Item>
// //           </Nav>
// //         </Col>

// //         {/* Toggle button for mobile screens */}
// //         <Button
// //           variant="primary"
// //           className="d-md-none mb-2 r"
// //           onClick={toggleSidebar}
// //           style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 1000 }}
// //         >
// //                    <span className="navbar-toggler-icon"></span>

// //         </Button>
// //            {/* <button
// //           className="navbar-toggler"
// //           type="button"
// //           data-bs-toggle="collapse"
// //           data-bs-target="#navbarSupportedContent"
// //           aria-controls="navbarSupportedContent"
// //           aria-expanded="false"
// //           aria-label="Toggle navigation"
// //           onClick={toggleSidebar}
// //         >
// //           <span className="navbar-toggler-icon"></span>
// //         </button> */}

// //         {/* Offcanvas Sidebar for mobile screens */}
// //         <Offcanvas show={showSidebar} onHide={toggleSidebar} className="bg-light">
// //           <Offcanvas.Header closeButton>
// //             <Offcanvas.Title>Dashboard Menu</Offcanvas.Title>
// //           </Offcanvas.Header>
// //           <Offcanvas.Body>
// //             <Nav className="flex-column">
// //               <Nav.Item>
// //                 <Nav.Link as={Link} to="/dashboard/carts" className="text-secondary" onClick={toggleSidebar}>
// //                   <FaShoppingCart className="me-2" />
// //                   Cart
// //                 </Nav.Link>
// //               </Nav.Item>
// //               <Nav.Item>
// //                 <Nav.Link as={Link} to="/dashboard/paymenthistory" className="text-secondary" onClick={toggleSidebar}>
// //                   <FaList className="me-2" />
// //                   Payment History
// //                 </Nav.Link>
// //               </Nav.Item>
// //               <Nav.Item>
// //                 <Nav.Link as={Link} to="/" className="text-secondary" onClick={toggleSidebar}>
// //                   <FaHome className="me-2" />
// //                   Home
// //                 </Nav.Link>
// //               </Nav.Item>
// //             </Nav>
// //           </Offcanvas.Body>
// //         </Offcanvas>

// //         {/* Main content */}
// //         <Col md={{ span: 9, offset: 3 }} lg={{ span: 10, offset: 2 }} className="p-3" style={{ height: '100vh' }}>
// //           <Outlet />
// //         </Col>
// //       </Row>
// //     </Container>
// //     // <!-- Basic Sidebar -->
   



// //  );
// // };

// // export default Dashboard;

// import React, { useState } from 'react';
// import { Container, Row, Col, Nav, Button, Offcanvas } from 'react-bootstrap';
// import { Outlet, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaShoppingCart, FaList, FaHome } from 'react-icons/fa';

// const Dashboard = () => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   const toggleSidebar = () => setShowSidebar(!showSidebar);

//   return (
//     <Container fluid>
//       <Row className="min-vh-100">
//         {/* Sidebar for large screens */}
//         <Col md={3} lg={2} className="d-none d-md-block bg-light p-0 sidebar">
//           <Nav className="flex-column p-3">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/dashboard/carts" className="text-secondary">
//                 <FaShoppingCart className="me-2" />
//                 Cart
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link as={Link} to="/dashboard/paymenthistory" className="text-secondary">
//                 <FaList className="me-2" />
//                 Payment History
//               </Nav.Link>
//             </Nav.Item>
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" className="text-secondary">
//                 <FaHome className="me-2" />
//                 Home
//               </Nav.Link>
//             </Nav.Item>
//           </Nav>
//         </Col>

//         {/* Toggle button for mobile screens */}
//         <Button
//           variant="primary"
//           className="d-md-none mb-2"
//           onClick={toggleSidebar}
//           style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 1000 }}
//         >
//           <span style={{ fontSize: '24px', lineHeight: '0' }}>☰</span>
//         </Button>

//         {/* Offcanvas Sidebar for mobile screens */}
//         <Offcanvas show={showSidebar} onHide={toggleSidebar} className="bg-light">
//           <Offcanvas.Header closeButton>
//             <Offcanvas.Title>Dashboard Menu</Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body>
//             <Nav className="flex-column">
//               <Nav.Item>
//                 <Nav.Link as={Link} to="/dashboard/carts" className="text-secondary" onClick={toggleSidebar}>
//                   <FaShoppingCart className="me-2" />
//                   Cart
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link as={Link} to="/dashboard/paymenthistory" className="text-secondary" onClick={toggleSidebar}>
//                   <FaList className="me-2" />
//                   Payment History
//                 </Nav.Link>
//               </Nav.Item>
//               <Nav.Item>
//                 <Nav.Link as={Link} to="/" className="text-secondary" onClick={toggleSidebar}>
//                   <FaHome className="me-2" />
//                   Home
//                 </Nav.Link>
//               </Nav.Item>
//             </Nav>
//           </Offcanvas.Body>
//         </Offcanvas>

//         {/* Main content */}
//         <Col md={{ span: 9, offset: 3 }} lg={{ span: 10, offset: 2 }} className="p-3">
//           <Outlet />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;
import React, { useState } from 'react';
import { Container, Row, Col, Nav, Button, Offcanvas } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart, FaList, FaHome } from 'react-icons/fa';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <Container fluid className='p-0' style={{overflowX:'hidden'}}>
      <Row className="min-vh-100">
        {/* Sidebar for large screens */}
        <Col md={3} lg={2} className="d-none d-md-block bg-light p-0 sidebar">
          <Nav className="flex-column p-3">
            <Nav.Item>
              <Nav.Link as={Link} to="/dashboard/carts" className="text-secondary">
                <FaShoppingCart className="me-2" />
                Cart
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/dashboard/paymenthistory" className="text-secondary">
                <FaList className="me-2" />
                Payment History
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/" className="text-secondary">
                <FaHome className="me-2" />
                Home
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Toggle button for mobile screens */}
        <Button
          variant="link" // Use "link" variant to remove background
          className="d-md-none p-0"
          onClick={toggleSidebar}
          style={{ position: 'fixed', top: '10px', left: '10px', zIndex: 1000, fontSize: '24px', color: '#000', textAlign: 'start'}}
        >
          ☰
        </Button>

        {/* Offcanvas Sidebar for mobile screens */}
        <Offcanvas show={showSidebar} onHide={toggleSidebar} className="bg-light">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Dashboard Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Item>
                <Nav.Link as={Link} to="/dashboard/carts" className="text-secondary" onClick={toggleSidebar}>
                  <FaShoppingCart className="me-2" />
                  Cart
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/dashboard/paymenthistory" className="text-secondary" onClick={toggleSidebar}>
                  <FaList className="me-2" />
                  Payment History
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/" className="text-secondary" onClick={toggleSidebar}>
                  <FaHome className="me-2" />
                  Home
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>

        {/* Main content */}
        <Col md={{ span: 9, offset: 3 }} lg={{ span: 10, offset: 2 }} className="p-3">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;



