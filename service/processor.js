module.exports = async (job) => {
  try {
    console.log(job.data);
    return job.data;
  } catch (e) {
    console.error(e);
  }
};
