var nodemailer = require("nodemailer");
var express = require("express");

module.exports = {
  send: function(sendTo, subject, content) {
    var mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 578,
      SMTPAuth: true,
      SMTPSecure: "tls",
      auth: {
        user: "anthoi.nguyen.dev@gmail.com",
        password: "thanthoai1223..,"
      }
    });

    mailOpts = {
      from: "An Thoi Nguyen",
      to: sendTo,
      subject: subject,
      generateTextFromHTML: true,
      html: content
    };

    smtpTrans.sendMail(mailOpts, (err, info) => {
      if (err) {
        console.log("False", err);
      } else {
        console.log("Success");
      }
    });
  },

  sendWithReplyTo: function(sendTo, subject, content, replyTo) {
    var mailOpts, smtpTrans;
    smtpTrans = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      SMTPAuth: true,
      SMTPSecure: "tls",
      auth: {
        user: "anthoi.nguyen.dev@gmail.com",
        password: "thanthoai1223..,"
      }
    });

    mailOpts = {
      from: "An Thoi Nguyen",
      reply_to: replyTo,
      to: sendTo,
      subject: subject,
      generateTextFromHTML: true,
      html: content
    };

    smtpTrans.sendMail(mailOpts, (err, info) => {
      if (err) {
        console.log("False", err);
      } else {
        console.log("Success");
      }
    });
  }
};
