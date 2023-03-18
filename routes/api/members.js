const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// Gets All Members
router.get('/', (req, res) => {
  res.json(members);
});

// Get Single Member // GET request
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: `Not members with the id of ${req.params.id}`});
  }
});

// Create Member // POST request
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active',
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({msg: 'Please include a name and email'});
  }
  members.push(newMember);
  res.json(members);
});

// Update Member // Update - PUT request
router.put('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    const updMember = req.body;
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;

        res.json({msg: 'Member updated', member});
      }
    });
  } else {
    res.status(400).json({msg: `Not members with the id of ${req.params.id}`});
  }
});

module.exports = router;