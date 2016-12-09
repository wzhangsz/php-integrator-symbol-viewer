'use babel';

import _ from 'lodash';

module.exports = function StaticMethodDetailsView(staticMethod) {

    return `
        <div class="details">
            <h6>Name</h6>
            <p>${staticMethod.name}</p>
            <h6>Declared in</h6>
            <p>${staticMethod.declaringStructure.name}</p>
            ${_.isEmpty(staticMethod.parameters) ? `` : `
                <div class="parameters-list">
                    <h6>Parameters</h6>
                    ${_.map(staticMethod.parameters, (p) => `
                        <span>
                            ${p.typeHint} $${p.name}
                        </span><br />
                    `)}
                </div>
            `}

            ${
                _.isEmpty(staticMethod.returnTypes) ? `` : `
                <div class="parameters-list">
                    <h6>Returns</h6>
                    ${_.map(staticMethod.returnTypes, (t) => `
                        <span>
                            ${t.type} $${t.resolvedType}
                        </span>
                    `)}
                </div>
            `}
            
            ${
                _.isNil(staticMethod.shortDescription)
                || _.isEmpty(staticMethod.shortDescription)? 
                `` :
                `<h6>Description</h6>
                <p>${staticMethod.shortDescription}</p>`
            }
        </div>
    `;
}
