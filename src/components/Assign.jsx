import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from "@mui/material"
const Assign = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
                <TableContainer sx={{ position: "relative", left: 866, top: 210 }}>
                    <Table sx={{ bgcolor: "#fff3cd", height: "4px", width: "400px" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ borderRight: "1px solid lightgrey" }}>
                                    <i>Last Updated:</i>
                                </TableCell>
                                <TableCell >
                                    <i><b>20th July 2022</b> </i>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>


                </TableContainer>
                <TableContainer component={Paper} sx={{ marginTop: 30 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ borderRight: "1px solid lightgrey", fontFamily: 'sans-serif', fontSize: "18px" }}>Entity</TableCell>
                                <TableCell sx={{ fontFamily: 'sans-serif', fontSize: "18px" }}>Means HERR Enterprises, a registered entity.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ borderRight: "1px solid lightgrey", fontFamily: 'sans-serif', fontSize: "18px" }}>GDPR</TableCell>
                                <TableCell sx={{ fontFamily: 'sans-serif', fontSize: "18px" }}>Means the General Data Protection Regulation.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ borderRight: "1px solid lightgrey", fontFamily: 'sans-serif', fontSize: "18px" }}>Responsible Person</TableCell>
                                <TableCell sx={{ fontFamily: 'sans-serif', fontSize: "18px" }}>Means Data Protection Officer as appointed by the company from time to time.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell sx={{ borderRight: "1px solid lightgrey", fontFamily: 'sans-serif', fontSize: "18px" }}>Data registry</TableCell>
                                <TableCell sx={{ fontFamily: 'sans-serif', fontSize: "18px" }}>Means a registry of all systems or contexts in which personal data is processed by the entity including the systems of HERR Enterprises along with its associate brands.</TableCell>
                            </TableRow>
                        </TableHead>
                    </Table>
                </TableContainer>
                <br /><br />

                <Typography variant='h5' sx={{ color: "#03a4ed" }}>1.Data protection principles</Typography>
                <Typography variant='h6'>The Entity is committed to processing data in accordance with its responsibilities under the GDPR.</Typography>
                <strong><h3>Article 5 of the GDPR requires that personal data shall be:</h3></strong>
                <p >
                    processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures."<br />
                    processed lawfully, fairly and in a transparent manner in relation to individuals;<br />
                    collected for specified, explicit and legitimate purposes and not further processed in a manner that is incompatible with those purposes;further processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes shall not be considered to be incompatible with the initial purposes;<br />
                    adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed;<br />
                    accurate and, where necessary, kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate, having regard to the purposes for which they are processed, are erased or rectified without delay;<br />
                    processed in a manner that ensures appropriate security of the personal data, including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage, using appropriate technical or organisational measures."
                </p>


                <Typography variant='h5' sx={{ color: "#03a4ed" }}>2. General provisions
                </Typography>
                <p>This policy applies to all personal data processed by the Entity.</p>
                <p >The Responsible Person shall take responsibility for the Entity's ongoing compliance with this policy.</p>
                <p>This policy shall be reviewed at least annually.</p>

                <Typography variant='h5' sx={{ color: "#03a4ed" }}>3. Lawful, fair and transparent processing
                </Typography>
                <p>To ensure its processing of data is lawful, fair and transparent, the Entity shall maintain a Register of Systems.</p>
                <p>The Register of Systems shall be reviewed at least annually.</p>
                <p>Individuals have the right to access their personal data and any such requests made to the Entity shall be dealt with in a timely manner.
                </p>

                <Typography variant='h5' sx={{ color: "#03a4ed" }}>4. Lawful purposes
                </Typography>
                <p >All data processed by the Entity must be done on one of the following lawful bases: consent, contract, legal obligation, vital interests, public task or legitimate interests.</p>
                <p>The Entity shall note the appropriate lawful basis in the Register of Systems.</p>
                <p>Where consent is relied upon as a lawful basis for processing data, evidence of opt-in consent shall be kept with the personal data.</p>
                <p>Where communications are sent to individuals based on their consent, the option for the individual to revoke their consent should be clearly available and systems should be in place to ensure such revocation is reflected accurately in the Entity's systems.</p>

                <Typography variant='h5' sx={{ color: "#03a4ed" }}>5. Data minimisation
                </Typography>
                <p>The Entity shall ensure that personal data are adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed.
                </p>

                <Typography variant='h5' sx={{ color: "#03a4ed" }}>6. Accuracy
                </Typography>
                <p>The Entity shall take reasonable steps to ensure personal data is accurate.
                </p>
                <p>Where necessary for the lawful basis on which data is processed, steps shall be put in place to ensure that personal data is kept up to date.</p>

                <Typography variant='h5' sx={{ color: "#03a4ed" }}>7. Archiving / removal
                </Typography>
                <p>To ensure that personal data is kept for no longer than necessary, the Entity shall put in place an archiving policy for each area in which personal data is processed and review this process annually.</p>
                <p>The archiving policy shall consider what data should/must be retained, for how long, and why.</p>

                <Typography variant='h5' sx={{ color: "#03a4ed" }}>8. Security
                </Typography>
                <p>
                    The Entity shall ensure that personal data is stored securely using modern software that is kept-up-to-date.</p>
                <p>Access to personal data shall be limited to personnel who need access and appropriate security should be in place to avoid unauthorised sharing of information.</p>
                <p>When personal data is deleted this should be done safely such that the data is irrecoverable.</p>
                <p>Appropriate back-up and disaster recovery solutions shall be in place.</p>

                <Typography variant='h5' sx={{ color: "#03a4ed" }}>9. Breach
                </Typography>
                <p>In the event of a breach of security leading to the accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data, the Entity shall promptly assess the risk to people's rights and freedoms and if appropriate report this breach to the appropriate authority and ultimate owner of the data in order to take the necessary corrective action.</p>

                <Typography variant='h5' sx={{ color: "#ffc107 " }}>END OF POLICY
                </Typography>




            </Grid>
            <Grid item xs={1}></Grid>

        </Grid>


    );
};

export default Assign;  