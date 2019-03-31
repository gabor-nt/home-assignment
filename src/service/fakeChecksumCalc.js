/*
 *  Since checksumming mp3 would need the whole blob and the url redirect to
 *  something called stitcher anyway (I guess the content is updated with ads
 *  with some frequency,  thus changing the checksum), I just went with what
 *  the rss feed provides
 */
module.exports = url => url.length;
