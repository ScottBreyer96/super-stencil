import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'super-compo',
  //styleUrl: 'super-compo.css',
  styleUrls: [
    'super-compo.css', '../../../node_modules/bootstrap/scss/_buttons.scss',
    '../../../node_modules/@material/button/mdc-button.scss',
    '../../../node_modules/@material/data-table/mdc-data-table.scss',
  ],

  shadow: true
})
export class SuperCompo {
  @Prop() msg: string;

  render() {
    return (
      <div>
        <h1>super-component {this.msg}</h1>

        <button type="button" class="btn btn-success">Bootstrap</button>
        <br />
        <button class="mdc-button">
          <div class="mdc-button--ripple" ></div>
          <span class="mdc-button__label">Material.io</span>
        </button>

        <br />
        <br />
        <br />
        <br />
        <br />


        <h2>Tableau simple bootstrap : </h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>



        <br />
        <br />
        <br />
        <br />
        <br />



        <h2>Tableau simple Material.io : </h2>

        <div class="mdc-data-table">
          <table class="mdc-data-table__table" aria-label="Dessert calories">
            <thead>
              <tr class="mdc-data-table__header-row">
                <th class="mdc-data-table__header-cell mdc-data-table__header-cell--checkbox" role="columnheader" scope="col">
                  <div class="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected">
                    <input type="checkbox" class="mdc-checkbox__native-control" aria-label="Checkbox for header row selection" />
                    <div class="mdc-checkbox__background">
                      <div class="mdc-checkbox__mixedmark"></div>
                    </div>
                  </div>
                </th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Status</th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Signal name</th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Severity</th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Stage</th>
                <th class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric" role="columnheader" scope="col">Time</th>
                <th class="mdc-data-table__header-cell" role="columnheader" scope="col">Roles</th>
              </tr>
            </thead>
            <tbody class="mdc-data-table__content">
              <tr data-row-id="u0" class="mdc-data-table__row">
                <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                  <div class="mdc-checkbox mdc-data-table__row-checkbox">
                    <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="u0" />
                    <div class="mdc-checkbox__background">
                      <div class="mdc-checkbox__mixedmark"></div>
                    </div>
                  </div>
                </td>
                <td class="mdc-data-table__cell">Online</td>
                <td class="mdc-data-table__cell" id="u0">Arcus watch slowdown</td>
                <td class="mdc-data-table__cell">Medium</td>
                <td class="mdc-data-table__cell">Triaged</td>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">0:33</td>
                <td class="mdc-data-table__cell">Allison Brie</td>
              </tr>
              <tr data-row-id="u1" class="mdc-data-table__row mdc-data-table__row--selected" aria-selected="true">
                <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                  <div class="mdc-checkbox mdc-data-table__row-checkbox mdc-checkbox--selected">
                    <input type="checkbox" class="mdc-checkbox__native-control" checked aria-labelledby="u1" />
                    <div class="mdc-checkbox__background">
                      <div class="mdc-checkbox__mixedmark"></div>
                    </div>
                  </div>
                </td>
                <td class="mdc-data-table__cell">Offline</td>
                <td class="mdc-data-table__cell" id="u1">monarch: prod shared ares-managed-features-provider-heavy</td>
                <td class="mdc-data-table__cell">Huge</td>
                <td class="mdc-data-table__cell">Triaged</td>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">0:33</td>
                <td class="mdc-data-table__cell">Brie Larson</td>
              </tr>
              <tr data-row-id="u2" class="mdc-data-table__row mdc-data-table__row--selected" aria-selected="true">
                <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                  <div class="mdc-checkbox mdc-data-table__row-checkbox mdc-checkbox--selected">
                    <input type="checkbox" class="mdc-checkbox__native-control" checked aria-labelledby="u2" />
                    <div class="mdc-checkbox__background">
                      <div class="mdc-checkbox__mixedmark"></div>
                    </div>
                  </div>
                </td>
                <td class="mdc-data-table__cell">Online</td>
                <td class="mdc-data-table__cell" id="u2">monarch: prod shared ares-managed-features-provider-heavy</td>
                <td class="mdc-data-table__cell">Minor</td>
                <td class="mdc-data-table__cell">Not triaged</td>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">0:33</td>
                <td class="mdc-data-table__cell">Jeremy Lake</td>
              </tr>
              <tr data-row-id="u3" class="mdc-data-table__row">
                <td class="mdc-data-table__cell mdc-data-table__cell--checkbox">
                  <div class="mdc-checkbox mdc-data-table__row-checkbox">
                    <input type="checkbox" class="mdc-checkbox__native-control" aria-labelledby="u3" />
                    <div class="mdc-checkbox__background">
                      <div class="mdc-checkbox__mixedmark"></div>
                    </div>
                  </div>
                </td>
                <td class="mdc-data-table__cell">Online</td>
                <td class="mdc-data-table__cell" id="u3">Arcus watch slowdown</td>
                <td class="mdc-data-table__cell">Negligible</td>
                <td class="mdc-data-table__cell">Triaged</td>
                <td class="mdc-data-table__cell mdc-data-table__cell--numeric">0:33</td>
                <td class="mdc-data-table__cell">Angelina Cheng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}
