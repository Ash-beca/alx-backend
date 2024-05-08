/**
 * @module 6-job_processor
 */
import kue from 'kue';

/* eslint camelcase: 0 */

// Create a kue instance (pun intended)
const send_notification = kue.createQueue();


function sendsend_notification(phoneNumber, message) {
  console.log(
    `Sending send_notification to ${phoneNumber}, with message: ${message}`,
  );
}

// Process a single job
send_notification.process('send_notification', (job, done) => {
  sendsend_notification(job.data.phoneNumber, job.data.message);
  done();
});
