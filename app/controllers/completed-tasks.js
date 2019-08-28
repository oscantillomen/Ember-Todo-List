import Ember from 'ember';

export default Ember.Controller.extend({
  tasks: [
    { name: "Client Meeting", date: "2019-03-27T07:22:13", completed: false, dscp: "description" },
    { name: "Design App Interface", date: "2019-06-12T07:22:13", completed: true, dscp: "description" },
    { name: "Learn Node.js", date: "2019-03-27T07:22:13", completed: false, dscp: "description" },
    { name: "Bring the puppy out", date: "2019-06-12T07:22:13", completed: true, dscp: "description" }
  ]
});
