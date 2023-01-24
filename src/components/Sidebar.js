import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa";

const routes = [
    {
        path: "/vehicleowner",
        name: "Vehicle owner Details",
    },
    {
        path: "/vehicleregistrationdetails",
        name: "VehicleRegistrationDetails",
    },
    {
        path: "/partydetails",
        name: "Consignee/PartyDetails",
    }
    ,
    {
        path: "/loadingpointdetails",
        name: "LodingPointDetails",
    },
    {
        path: "/masterDestinationName",
        name: "Unloding PointsDetails",
    },
    {
        path: "/transportedetail",
        name: "Transporter Details",
    },
    {
        path: "/membershiprenewal",
        name: "Union Renewal",
    },
    {
        path: "/employeedetails",
        name: "Employeedetails",
    }

];
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const showAnimation = {
        hidden: {
            with: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            width: "auto",
            opacity: 1,
            transition: {
                duration: 0.2,
            },
        },
    };
    return (
        <div className="main-container">
            <motion.div
                animate={{ width: isOpen ? "190px" : "50px" }}
                className="sidebar"
            >
                <div className="top_section">
                    <div className="bars">
                        <FaBars onClick={toggle} />
                        <i className="bi bi-list"></i>
                    </div>
                </div>
                <section className="routes">
                    {routes.map((route) => (
                        <NavLink
                            activeClassName="active"
                            to={route.path}
                            key={route.name}
                            className="link"
                        >
                            <div className="icone">{route.icone}</div>
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        variants={showAnimation}
                                        inherit="hidden"
                                        animate="show"
                                        exit="hidden"
                                        className="link_text">{route.name}
                                    </motion.div>)}
                            </AnimatePresence>
                        </NavLink>
                    ))}
                </section>
            </motion.div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;