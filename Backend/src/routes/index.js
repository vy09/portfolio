const express = require("express");
const router = express.Router();

const authRoutes = require("../modules/auth/auth.routes");
const projectsRoutes = require("../modules/projects/projects.routes");
const aboutRoutes = require("../modules/about/about.routes");
const skillsRoutes = require("../modules/skills/skills.routes");
const certificationsRoutes = require("../modules/certifications/certifications.routes");
const contactsRoutes = require("../modules/contacts/contacts.routes");
const dashboardRoutes = require("../modules/dashboard/dashboard.routes");

// Mount routes
router.use("/auth", authRoutes);
router.use("/projects", projectsRoutes);
router.use("/about", aboutRoutes);
router.use("/skills", skillsRoutes);
router.use("/certifications", certificationsRoutes);
router.use("/contacts", contactsRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
