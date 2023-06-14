import styles from "./MainPage.module.css";
import Image from "next/image";
import configImage from "../assets/config.PNG";
import inviteImage from "../assets/inviteImage.PNG";
import sampleFormImage from "../assets/sampleFormImage.PNG";
import formSubmitGif from "../assets/formSubmitGif.gif";
import authBlockImage from "../assets/authBlockImage.PNG";
import databaseImage from "../assets/databaseImage.PNG";
import userInfoImage from "../assets/userInfoImage.PNG";

export const MainPage = () => {
  return (
    <div className={styles.middleMain}>
      <div className={styles.header}>ML Measure</div>
      <div className={styles.content}>
        ML Measure is the 1/3 part of the ML Interface Project. ML Interface
        projects aims to give an experimental study in the question:
      </div>
      <div className={styles.smallerHeader}>
        "Is it possible for a machine learning model to be as accurate as
        experts in any kind of classification problems."
      </div>
      <div className={styles.content}>
        We are collecting data from experts by dynamically generated read-only
        forms, inviting experts to the application, experts make their
        prediction to the classification problem. We are performing analyzes on
        the collected data by using the experience and proficiency of the
        experts and comparing their answers to the predictions of the machine
        learning models. The process begins with sending an invitation mail to
        an expert using a get request from the admin panel to the server as can
        be seen below.
        <Image
          src={inviteImage}
          alt="inviteImage.png"
          className={styles.imageStyles}
        />
      </div>

      <div className={styles.content}>
        We are generating an authentication token on the server and passing this
        by URL. Thus all the login-register processes are avoided, in order to
        prevent bothering the users by these formal processes.
      </div>
      <div className={styles.content}>
        If this is the very first time the expert is clicking on the link we are
        asking two simple questions which will be used when analyzing the data.
        These questions can be seen below.
        <Image
          src={userInfoImage}
          alt="userInfoImage.PNG"
          className={styles.imageStyles}
        />
        Right after the expert submits the form, user is navigated to the
        prediction page. Here we are fetching a config file which is used when
        generating the dynamic form. Thus our application becomes available for
        any kind of dataset, as far as we prepare a config file, which is pretty
        easy to do. A sample config file can be seen below.
      </div>
      <Image
        src={configImage}
        alt="configImage.png"
        className={styles.imageStyles}
      />
      <div className={styles.content}>
        The config file contains the form name, prediction options, the submit
        area question, data descriptions in a short and explanatory way and with
        which html element a data field should be represented with checkbox,
        dropdown, textfield etc. The next step is to fetch a single random
        observation from the server, and generate the dynamic form with the help
        of config file. The submit area is also generated dynamically with the
        help of the config file. A sample form can be seen below.
        <Image
          src={sampleFormImage}
          alt="formSampleImage.png"
          className={styles.imageStyles}
        />
        The expert is supposed to make a prediction in according to the given
        data. As soon as the expert makes his prediction(clicks on one of the
        given buttons), the form starts to disappear, a success-popup appears on
        the upper left corner of the screen, a new observation is fetched and
        form becomes visible again. Thus the user recognizes his answer is saved
        and a new form appeared. No extra buttons, no extra dialog modals, and
        the overall purpose of this simplicity is to convince the user to submit
        as much form as he can.
        <Image
          src={formSubmitGif}
          alt="formSubmit.gif"
          className={styles.imageStyles}
          loading="lazy"
        />
        The authentication tokens ensures the collected datas security. The
        access is blocked in both client and server sides if no authentication
        token is presented.
        <Image
          src={authBlockImage}
          alt="authBlockImage.PNG"
          className={styles.imageStyles}
        />
        The predictions experts make are saved into the mongoDB along with their
        proficiency information and will be used in analyzes in ML-Contribute
        project.
        <Image
          src={databaseImage}
          alt="databaseImage.png"
          className={styles.imageStyles}
        />
        The "1" in the userInfo field indicates that the year of expertise of
        the user is only 1 year and "u" indicates the expert is working at a
        University Hospital.
        <br />
        The prediction indicates the prediction of the user and the status
        indicates whether this observation have benn fetched or not.
      </div>
      <div className={styles.content}>
        That's all :). Thank you for reading, if you wanna see more on this
        project, don't forget to read ML-Contribute which is the last part of
        this project.
      </div>

      <div className={styles.smallerHeader}>
        <br />
        Bilgehan Aygün - 21827153
        <br />
        Ayberk Aygün - 21945848
      </div>
    </div>
  );
};
