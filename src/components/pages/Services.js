import React, { Component } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection2 from '../HeroSection2';
import Footer from '../Footer';
import { convertBytes } from '/Users/carolmendonca/Desktop/website/src/helpers.js';
import moment from 'moment'
import { Card } from 'react-bootstrap';
class Services extends Component {
  render() {
    
                            
                                  
                          
    return (
      
    <>
     <HeroSection2 />
    <center>
                              <table className="table-sm table-bordered text-monospace" style={{ width: '1000px', maxHeight: '450px' ,background:'white' }}>
          
                                <thead style={{ 'fontSize': '15px' }}>
          
                                  <tr className="bg-dark text-white">
                                    <th scope="col" style={{ width: '10px' }}>Micro Finance No</th>
                                    <th scope="col" style={{ width: '200px' }}>Total Funds</th>
                                    <th scope="col" style={{ width: '230px' }}>Account No</th>
                                    <th scope="col" style={{ width: '230px' }}>PaperWork</th>
          
                                  </tr>
                                </thead>
          
                                {this.props.files.map((file, key) => {
                                  return (
          
                                    <thead style={{ 'fontSize': '12px' }} key={key}>
                                      <tr>
                                        <td>{file.fileId}</td>
                                        {/* <td>{file.fileName}</td>
                                  <td>{file.fileDescription}</td>
                                  <td>{file.fileType}</td>  */}
                                        {/* {/* <td>{convertBytes(file.fileSize)}</td> */}
                                        <td>{file.fileDescription}</td>
                                        <td>
                                          <a
                                            href={"https://etherscan.io/address/" + file.uploader}
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            {file.uploader}
                                          </a>
                                        </td>
                                        
                                        <td>
          
                                          <a
                                            href={"https://ipfs.infura.io/ipfs/" + file.fileHash}
                                            rel="noopener noreferrer"
                                            target="_blank">
                                            {file.fileHash}
                                          </a>
                                        </td>
                                      </tr>
                                    </thead>
                                  )
                                })}
                              </table></center>
     
      <br></br>
      
      {/* <Cards></Cards> */}
    <Footer></Footer>
    
    </>
  );
}
}
export default Services;