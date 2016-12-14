'use babel';

import _ from 'lodash';

module.exports = function StaticMethodDetailsView(staticMethod) {
    //console.log(staticMethod);
    return `
        <div class="details">
            <h6><strong>Name</strong></h6>
            <p>${staticMethod.name}</p>
            <h6><strong>Declared in</strong></h6>
            <p>${staticMethod.declaringStructure.name}</p>
            ${_.isEmpty(staticMethod.parameters) ? `` : `
                <div class="parameters-lists">
                    <h6><strong>Parameters</strong></h6>
                    <table>
                    ${_.map(staticMethod.parameters, (p) => `
                        <tr><td nowrap=true valign="top">
                            ${_.map(p.types,(pp)=>`
                                ${_.isEmpty(pp.type) ? `${pp.resolvedType}` : `${pp.type}`}
                            `)}
                            </td>
                            <td nowrap=true valign="top">
                            $${p.name} 
                            
                            ${_.isEmpty(p.defaultValue) ? `` : `=${p.defaultValue}`}  
                            </td><td>
                            ${_.isEmpty(p.description) ? `` : ` ${p.description}`}
                            </td>
                        </tr>
                    `).join('')}
                    </table>
                </div>
            `}

            ${
                _.isEmpty(staticMethod.returnTypes) ? `` : `
                <div class="parameters-list">
                    <h6><strong>Return</strong></h6>
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
                `<h6><strong>Description</strong></h6>
                <p>${staticMethod.shortDescription}</p>`
            }
        </div>
    `;
}
