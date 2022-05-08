const Bootcamp = require('../models/Bootcamp');
// @desc    Get all bootcamps
// @route   GET api/v1/bootcamp
// @access  Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).send({ success: true, message: 'Show all bootcamps' });
}

// @desc    Get specific bootcamps
// @route   GET api/v1/bootcamp
// @access  Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).send({ success: true, message: `Show bootcamp with id ${req.params.id}` })
}

// @desc    Create new bootcamp
// @route   POST api/v1/bootcamp
// @access  Public
exports.createBootcamp = (req, res, next) => {
    res.status(200).send({ success: true, message: 'Create new bootcamp' });
}

// @desc    Update specific bootcamp
// @route   PUT api/v1/bootcamp
// @access  Public
exports.updateBootcamp = (req, res, next) => {
    res.status(200).send({ success: true, message: `Updated bootcamp for id ${req.params.id}` })
}

// @desc    Delete specific bootcamp
// @route   DELETE api/v1/bootcamp
// @access  Public
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).send({ success: true, message: `Delete bootcamp with id ${req.params.id}` })
}