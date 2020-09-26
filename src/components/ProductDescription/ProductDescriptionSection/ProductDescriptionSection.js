import React from 'react';
import Aux from '../../../hoc/Aux';
import Style from './ProductDescriptionSection.module.css';


let ProductDescriptionSection = (props)=> {
  return (
    <Aux>
      <h1 className={`text-center ${Style.pageHeading}`}>{props.contentData.heading}</h1>
      <div className="row">
        <div className="col-md-4">
          <figure>
            <img className="img-responsive" src={props.contentData.images[0].imageUrl} alt={props.contentData.images[0].alt}/>
            <figcaption className="text-center">{props.contentData.images[0].figCaption}</figcaption>
          </figure>
        </div>
        <div className="col-md-8">
          <p className={Style.projectBrief}>{props.contentData.projectBrief}</p><br/>
          <p className={Style.projectBrief}>{props.contentData.projectCaption}</p>
          <p className="text-center"><button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={props.modalRefClicked}>{props.contentData.modalButtonText}</button></p>
        </div>
      </div>
      <div className="row">
        <h2 className="text-center">{props.contentData.caseStudyHeading}</h2>
        {
          props.contentData.images.map((img, index)=> {
            if(index>0) {
              return <div className="col-md-4" key={index}>
                      <figure>
                        <img className="img-responsive" src={img.imageUrl} alt={img.alt}/>
                        <figcaption className="text-center">{img.figCaption}</figcaption>
                      </figure>
                    </div>;
            } else {
              return null;
            }
          })
        }
      </div>
      <div className="row">
        <div className="col-md-12 text">
          <p>{props.contentData.projectDetailedProcess}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <h2>{props.contentData.projectCosting.heading}</h2>
          <table className="table table-striped">
            <tbody>
              {
                Object.entries(props.contentData.projectCosting.gridValues).map((tableRow, index)=> {
                  return <tr key={index}>
                        <th scope="row">{tableRow[0]}</th>
                        <td>{tableRow[1]}</td>
                      </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </Aux>
  );
}

export default ProductDescriptionSection;