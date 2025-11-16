<template>
  <DefaultLayout>
    <b-row class="justify-content-center text-center mt-4">
      <b-col lg="6">
        <h3 class="fw-semibold">Contact Us with Our Team</h3>
        <p>Got any questions about the product or scaling on our platform? We're here to help. Chat to our friendly team 24/7 and get onboard in less than 5 minutes.</p>
      </b-col>
    </b-row>

    <b-row class="justify-content-center mt-4">
      <b-col lg="12">
        <b-card no-body>
          <b-card-body>
            <b-row>
              <b-col xxl="6">
                <b-card no-body class="mb-0 shadow-none border-0">
                  <b-card-header class="bg-light-subtle border-0">
                    <h4 class="mb-0">Ask your different questions</h4>
                  </b-card-header>
                  <b-card-body>
                    <b-form action="/" class="authentication-form">
                      <b-row class="mb-3">
                        <b-col lg="6">
                          <b-form-group label="First Name" label-for="example-name">
                            <b-form-input type="text" id="example-name" placeholder="First name" />
                          </b-form-group>
                        </b-col>
                        <b-col lg="6">
                          <b-form-group label="Last Name" label-for="last-name">
                            <b-form-input type="text" id="last-name" placeholder="Last name" />
                          </b-form-group>
                        </b-col>
                      </b-row>
                      <div class="mb-3">
                        <b-form-group label="Email" label-for="example-email">
                          <b-form-input type="email" id="example-email" placeholder="Enter your email" />
                        </b-form-group>
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="contactnumber">Contact Number</label>
                        <DropDown customClass="form-group input-group">
                          <button class="btn btn-light dropdown-toggle rounded-end-0 border" type="button" data-bs-toggle="dropdown" aria-expanded="false">U.S.A</button>
                          <ul class="dropdown-menu">
                            <li>
                              <a class="dropdown-item" href="#"> U.S.A </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"> India </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"> Iraq </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"> South Africa </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="#"> France </a>
                            </li>
                          </ul>
                          <input type="number" class="form-control" id="contactnumber" placeholder="+0(222)000-0000" required />
                        </DropDown>
                      </div>
                      <div class="mb-3">
                        <b-form-group label="Message" label-for="exampleFormControlTextarea1">
                          <b-form-textarea type="email" id="exampleFormControlTextarea1" :rows="5" placeholder="Max 150 words" />
                        </b-form-group>
                      </div>
                      <div class="mb-3">
                        <h5 class="my-3">Services</h5>
                        <b-row>
                          <b-col xxl="6">
                            <div class="mb-2">
                              <b-form-checkbox>Website Design</b-form-checkbox>
                            </div>
                            <div class="mb-2">
                              <b-form-checkbox>UX Design</b-form-checkbox>
                            </div>
                            <div class="mb-2">
                              <b-form-checkbox>User Research</b-form-checkbox>
                            </div>
                          </b-col>
                          <b-col xxl="6">
                            <div class="mb-2">
                              <b-form-checkbox>Content Creation</b-form-checkbox>
                            </div>
                            <div class="mb-2">
                              <b-form-checkbox>Strategy & Consulting</b-form-checkbox>
                            </div>
                            <div class="mb-2">
                              <b-form-checkbox>Other</b-form-checkbox>
                            </div>
                          </b-col>
                        </b-row>
                      </div>
                      <div class="text-center d-grid">
                        <b-button variant="primary" type="submit"> Send Message </b-button>
                      </div>
                    </b-form>
                  </b-card-body>
                </b-card>
              </b-col>

              <b-col xxl="6">
                <div class="mapouter">
                  <div class="gmap_canvas">
                    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <a href="https://strandsgame.net/">Strands</a>
                  </div>
                </div>
                <div class="my-4">
                  <h4 class="fw-medium">Do you need quick help with some general inquiries ?</h4>
                  <p>You can use any of the support systems below if your query is urgent, We will be happy to be of help.</p>
                  <b-row class="g-4">
                    <b-col xl="6">
                      <div class="d-flex p-1">
                        <div class="avatar-md">
                          <span class="avatar-title bg-light text-dark fs-24 rounded-circle">
                            <Icon icon="iconamoon:location-pin-duotone"></Icon>
                          </span>
                        </div>
                        <div class="d-block align-self-center text-truncate ms-2">
                          <h5 class="fw-medium fs-14 text-uppercase">Office Address</h5>
                          <span>660 Courtright Bismarck, ND</span>
                        </div>
                      </div>
                    </b-col>
                    <b-col xl="6">
                      <div class="d-flex p-1">
                        <div class="avatar-md">
                          <span class="avatar-title bg-light text-dark fs-24 rounded-circle">
                            <Icon icon="iconamoon:phone-duotone"></Icon>
                          </span>
                        </div>
                        <div class="d-block align-self-center text-truncate ms-2">
                          <h5 class="fw-medium fs-14 text-uppercase">Telephone number</h5>
                          <span>1-888-452-1505</span>
                        </div>
                      </div>
                    </b-col>
                    <b-col xl="6">
                      <div class="d-flex p-1">
                        <div class="avatar-md">
                          <span class="avatar-title bg-light text-dark fs-24 rounded-circle">
                            <Icon icon="iconamoon:email-duotone"></Icon>
                          </span>
                        </div>
                        <div class="d-block align-self-center text-truncate ms-2">
                          <h5 class="fw-medium fs-14 text-uppercase">Email Address</h5>
                          <span>rachelmtrojano@armyspy.com</span>
                        </div>
                      </div>
                    </b-col>
                    <b-col xl="6">
                      <div class="d-flex p-1">
                        <div class="avatar-md">
                          <span class="avatar-title bg-light text-dark fs-24 rounded-circle">
                            <Icon icon="iconamoon:link-external-duotone"></Icon>
                          </span>
                        </div>
                        <div class="d-block align-self-center text-truncate ms-2">
                          <h5 class="fw-medium fs-14 text-uppercase">Social Contact</h5>
                          <div class="d-flex justify-content-center gap-3">
                            <a href="#!" class="btn fs-20 d-inline-flex align-items-center justify-content-center text-primary p-0" id="tooltip1">
                              <i class="bx bxl-facebook"></i>
                              <b-tooltip target="tooltip1" class="primary-tooltip" placement="bottom"> Facebook </b-tooltip>
                            </a>
                            <a href="#!" class="btn fs-20 d-inline-flex align-items-center justify-content-center text-danger p-0" id="tooltip2">
                              <i class="bx bxl-instagram-alt"></i>
                              <b-tooltip target="tooltip2" class="danger-tooltip" placement="bottom"> Instagram </b-tooltip>
                            </a>
                            <a href="#!" class="btn fs-20 d-inline-flex align-items-center justify-content-center text-info p-0" id="tooltip3">
                              <i class="bx bxl-twitter"></i>
                              <b-tooltip target="tooltip3" class="info-tooltip" placement="bottom"> Twitter</b-tooltip>
                            </a>
                            <a href="#!" class="btn fs-20 d-inline-flex align-items-center justify-content-center text-primary p-0" id="tooltip4">
                              <i class="bx bxl-linkedin"></i>
                              <b-tooltip target="tooltip4" class="primary-tooltip" placement="bottom"> Linkedin </b-tooltip>
                            </a>
                          </div>
                        </div>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DropDown from '@/components/DropDown.vue'
import { Icon } from '@iconify/vue'
</script>
