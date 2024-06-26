"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, []);
  return (
    <div>
      <Navbar />
      <section>
        <div className="pricingBg w-full h-[580px] rounded-b-[80px] px-20 pt-[300px] z-10 ">
          <p className="tracking-wide font-normal font-flyHead text-[64px] leading-[74px] text-[#ffffff] text-center uppercase">
            Terms And Conditons
          </p>
        </div>
      </section>
      <div className="max-container">
        <div className="text-[#000049] font-inter px-20 pt-20">
          <p className="font-semibold text-[24px]">General Terms of Use</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                This website is operated by DevBoost (“we”, “our” or “us”) and
                is available at http://www.devboost.co (“Site”).
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                The Customer Terms of Service (“Customer Terms”) govern your
                acquisition, rights and responsibilities when using our software
                development analytics, performance insights, team feedback
                analysis, and collaboration tools (“Services”).
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                If you are entering into these Customer Terms on behalf of a
                company or other legal entity, you represent that you have the
                authority to bind such entity and its affiliates to these terms
                and conditions. If you do not have such authority or if you do
                not agree with the terms and conditions of Customer Terms, do
                not use the Services, and you must not accept these Customer
                Terms.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Where you are invited by an account holder with a free or paid
                workspace subscription (“Customer”) to create a user account as
                an end user (“User Account”), the User Terms of Service (“User
                Terms”) govern your access and use of the Services. If you are
                using the Services as an individual user, for example, you are
                invited to a workspace created by another user (“Authorized
                User”), the User Terms govern your access and use of the
                Services.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                If you create an account for the free version of the Services,
                or for a free trial of paid Services plan, these Customer Terms
                will govern that trial. By clicking “accept” and using the
                Services, you are confirming your acceptance of the Services and
                agreeing to become bound by these Customer Terms
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                These Customer Terms are binding on you from the date on which
                you accept these Customer Terms until the date on which your
                account and these Customer Terms are terminated in accordance
                with these Terms (“Term”)
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Our User Privacy Policy states how we collect and use personal
                information relating to your use of the Services
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            Licence to use our Services
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Subject to the payment of any applicable fees and you and your
                Authorized Users’ compliance with these Customer Terms, we grant
                you a non-exclusive, non-transferable, non-sublicensable,
                revocable license to access and use the Services for the Term in
                accordance with any Authorized User Limits (as set out in your
                workspace subscription), solely for your use and enjoyment of
                the Services, as contemplated by these Customer Terms
                (“License”)
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You must not (and must ensure your Authorized Users do not)
                access or use the Services except as permitted by the License
                and you must not (and must not permit any other person to) use
                the Services in any way which is in breach of any applicable
                laws or which infringes any person’s rights, including
                intellectual property rights. We make no representation that the
                Services comply with the laws (including intellectual property
                laws) of any country outside SIngapore and you agree that you
                use the Services at your own risk and we are not responsible for
                ensuring that the Services are compliant with the laws,
                regulations or obligations of any particular industry,
                including, particularly the healthcare industry and education
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Signing up to our Site</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You are required to create an account to create a workspace for
                you and your Authorised Users to access certain features and to
                benefit from our Services. You may sign up through the Site,
                through a third-party provider, such as Atlassian, or by using
                an invitation link to our Site provided by a Reseller to you.
                You may be required to input additional information about
                yourself in order to use the Services. You must ensure that any
                information you give to us when creating an account, including
                personal information, is accurate and up-to-date. Your account
                is personal and you must not share the account, or your login
                details, with any other person. It is your responsibility to
                keep your login details confidential. At our sole discretion, we
                may refuse to allow any person to create an account or a
                workspace. You are the workspace owner of any workspace you
                create. Regardless of any change in contact details, you will
                remain responsible for your workspace, including any activity by
                Authorized Users, as set out in these Customer terms. If you
                wish to change the workspace owner, you must contact us and we
                will help you to transfer the workspace to the new owner.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Free and Trial Workspaces</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You may set up or a Reseller may invite you to create a free or
                trial workspace designed to allow evaluation of our Services and
                to make sure our Services are right for the Customer. Any free
                or trial period (and the features available during this period)
                can change at any time without notice. We have the right to
                terminate your account if you are found to be misusing the
                Services during a trial period.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            Upgrading to a paid subscription
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You may at any time choose to upgrade for a paid workspace
                subscription from a free workspace subscription. If you upgrade
                to a paid workspace subscription, you will be immediately
                upgraded and your free or trial workspace period will commence.
                You agree that if you sign up for a trial workspace for a paid
                subscription and you choose not to continue with your upgrade
                after the 30-day trial period by entering valid credit card or
                payment details, your subscription will be reverted back to the
                free workspace subscription.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Payment terms</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You agree to pay us the fees set out on the Site in relation to
                your chosen workspace subscription to benefit from our Services,
                at the intervals described in your workspace subscription,
                throughout the duration of your workspace subscription. In
                addition to your workspace subscription, you may choose to
                purchase add-ons that will be billed as described on the Site.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                In some cases, your payment date may change, for example, if
                payment is unable to be processed or if your workspace
                subscription began on a day not contained in a given month.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                We may modify the fees from time to time upon notice to you. The
                updated fees will apply in the next billing cycle after the
                change has occurred. If you do not agree to the fee change, you
                may cancel your workspace subscription before the next billing
                cycle and revert to the free workspace subscription.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                We may, in our sole discretion, agree with you different fees
                and/or payment terms to those set out on the Site. In this
                instance, the parties must agree on the fees and/or payment
                terms in writing and we will issue invoices to you for the fee
                outside of the Site and you must pay these invoices in
                accordance with the agreed payment terms. To the extent of any
                ambiguity or discrepancy between the agreed-upon payment terms
                and the Customer Terms, the payment terms agreed between the
                parties will prevail.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                GST, if applicable, will be set out separately from the relevant
                fees. You are responsible for all tax levies or duties imposed
                by taxing authorities in your own country, and you shall be
                responsible for payment of them. We have no responsibility to
                them on your behalf.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Other than as expressly stated in these Customer Terms, to the
                maximum extent permitted by law, any fees paid are
                non-refundable and there will be no refunds for any unused part
                of your workspace subscription.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Auto-renewal</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Workspace subscriptions automatically renew for additional
                periods equal to the preceding term, unless you terminate your
                workspace subscription in accordance with the Termination clause
                below.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Upgrading or downgrading</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You may upgrade or downgrade your workspace subscription at any
                time using the workspace billing interface. If you upgrade your
                workspace subscription, the payment method linked to your
                account will automatically be charged the fee on a pro-rata
                basis for your new workspace subscription at the time you
                upgrade. If you downgrade your workspace subscription, you will
                acquire credit for any unused part of the Services which will be
                attributed towards your next billing cycle.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Non-payment</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                If any fees owed to us by you remain unpaid 30 days after
                written notice of non-payment, we may, without limiting our
                other rights and remedies, cancel your workspace subscription.
                You acknowledge and agree that canceling your workspace
                subscription will result in the termination of these Customer
                Terms and a loss of access to Customer Data and Services.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            We will protect Customer Data
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                DevBoost processes two broad categories of personal information
                when you use our Products: <br />
                1. Your personal information as a customer or potential
                customer, which we refer to as Customer Account Data, and <br />
                2. The personal information contained within your company’s
                source systems (e.g. Jira, Bitbucket, Slack), which the DevBoost application uses to provide software development analytics and performance insights. We refer to this data as Source Systeli Data.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                DevBoost processes these categories of information differently,
                the details of which are explained in the sections that follow.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            How DevBoost processes customer account data
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                There are three general scenarios when DevBoost collects and
                processes your personal information: <br />
                1. When you visit a DevBoost public-facing website or make a
                request to receive information about DevBoost or our products;{" "}
                <br />
                2. When you contact DevBoost’s Sales or Customer Support Team;
                and <br />
                3. When you establish a DevBoost account and use our Services.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>We call this personal information Customer Account Data.</p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                The protection of Customer Data is a top priority for us. We
                will protect Customer Account Data and personal information in
                accordance with our Privacy Policy.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                DevBoost will store your Customer Account Data as long as needed
                to provide you with our services and to operate our business. If
                you ask DevBoost to delete specific personal information from
                your Customer Account Data, we will honor this request unless
                deleting that information prevents us from carrying out
                necessary business functions, like billing for our services,
                investigating claims, incidents, or potential fraud, calculating
                taxes, conducting required audits, or as otherwise required by
                law. You can contact our Customer Support Team at any time to
                request access, modify, or delete the Customer Account Data we
                possess about you, or to opt out of promotional communications.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            How DevBoost Processes Source System Data
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                As a software development analytics platform, DevBoost draws raw
                data from a number of your company’s systems of record in order
                to perform analysis and then surface performance metrics and
                insights. We call this information Source System Data, a subset
                of which contains personal information such as name and email
                address.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            What Source System Data Is Processed
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                DevBoost is able to collect and analyze Source System Data from
                the following system types: <br />
                1. Issues (e.g. Jira) <br />
                2. Code (e.g. Bitbucket) <br />
                3. Code quality (e.g. Sonar) <br />
                4. Chat (e.g. Slack) <br />
                5. Wiki (e.g. Confluence) <br />
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Within our Services, Users will identify the exact systems and
                instances to which read-only access is provided. In general,
                DevBoost collects the minimum amount of data necessary, and
                personally identifiable information is limited to: <br />
                1. Employee Name <br />
                2. Employee Email <br />
                3. Employee Avatar: As provided by the customer system, or if
                the employee has configured one, the public avatar at
                Gravatar.com
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            How Long We Store and How To Make Choices About Source System Data
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                DevBoost is able to collect and analyze Source System Data from
                the following system types: <br />
                1. Issues (e.g. Jira) <br />
                2. Code (e.g. Bitbucket) <br />
                3. Code quality (e.g. Sonar) <br />
                4. Chat (e.g. Slack) <br />
                5. Wiki (e.g. Confluence) <br />
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Within our Services, Users will identify the exact systems and
                instances to which read-only access is provided. In general,
                DevBoost collects the minimum amount of data necessary, and
                personally identifiable information is limited to: <br />
                1. Employee Name <br />
                2. Employee Email <br />
                3. Employee Avatar: As provided by the customer system, or if
                the employee has configured one, the public avatar at
                Gravatar.com
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            How Long We Store and How To Make Choices About Source System Data
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Data History: DevBoost performs an initial Source System Data
                import based on the length of data history specified by the
                subscription purchased by the Customer. Incremental updates to
                the Source System Data are then performed daily to reflect
                changes in the systems of record and provide customers with
                accurate and up-to-date information. We will retain and show all
                historical data sets unless you instruct us otherwise based on
                the length of history you would like to see reflected in the
                Services.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Closing Your Account and Deletion: To request closure of your
                DevBoost account, you can contact our Customer Support Team.
                Your Source System Data will be deleted within 30 days of
                account closure
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            Sharing Your Personal Information
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                We do not sell or allow your Customer Account Data to be used by
                third parties for their own marketing purposes unless you ask us
                to do so. Further, we do not sell your Source System Data, and
                we do not share it with third parties for their own marketing
                purposes.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            You own and are responsible for your Customer Data
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                All intellectual property (including copyright) developed,
                adapted, modified, or created by us or our personnel, including
                but not limited to our Services, the Site, and all other
                materials will at all times vest, or remain vested, in us.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                We give you a license to use our Services as set out in the
                ‘License to use our Services’ clause above.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Unless otherwise expressly set out in these Customer Terms or
                agreed with us, you must not breach any copyright or
                intellectual property rights connected with the Services. This
                includes but is not limited to: (i) copying or using, in whole
                or in part, any of our intellectual property; (ii) reproducing,
                retransmitting, distributing, disseminating, selling,
                publishing, broadcasting or circulating any of our intellectual
                property to any third party including on social media; (iii)
                attempting to discover the source code or object code or
                underlying structures, ideas, know how or algorithms in relation
                to the Services, the data or documentation; (iv) breaching any
                intellectual property rights connected with the Services,
                including (without limitation) altering or modifying any of our
                intellectual property; (v) causing any of our intellectual
                property to be framed or embedded in another website without our
                permission; (vi) decompiling or reverse engineering, including
                attempting to decompile or reverse engineer any Services; (vii)
                undertaking or attempting to undertake any act which would
                otherwise constitute an infringement of our moral rights; (viii)
                transferring the Services to a third party or mirroring the
                Services on another server; (ix) creating derivative works from
                the Services; (x) and using the Services for competitive
                analysis or to build competitive products.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                This clause will survive the termination or expiry of these
                Customer Terms
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Warranties</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You represent, warrant, and agree that: (i) you have full legal
                capacity, right, authority and power to enter into these
                Customer Terms and to perform your obligations under these
                Customer Terms; and (ii) these Customer Terms constitute a
                legal, valid and binding agreement, enforceable in accordance
                with its terms.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Indemnities</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Except to the extent that the liability arose directly from the
                negligent acts or omissions of us or any of our personnel, you
                indemnify us and our personnel against all liability that we or
                any of our personnel may incur and which is caused or
                contributed to by, whether directly or indirectly: (i) your
                breach of any intellectual property rights, any warranties or
                Customer Data provisions; and (ii) breach of any laws by you.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Despite anything to the contrary, to the extent any liability
                arises in connection with your use of a specific workspace and
                you can prove you are engaged as an employee of the Customer
                that controls that workspace, the operation of the indemnity
                above is excluded.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                We agree to indemnify you against liability you actually incur
                as a direct result of a third party claim, to the extent it is
                caused by our infringement of third party intellectual property
                rights.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Limitation of liability</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You agree that, to the maximum extent permitted by law, these
                Customer Terms exclude all terms, conditions, and warranties
                implied by statute, in fact, or on any other basis, except to
                the extent such terms, conditions, and warranties are fully
                expressed in these Customer Terms.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Despite anything to the contrary, to the maximum extent
                permitted by law, (i) neither party will be liable for any
                consequential loss, indirect loss, special loss, loss of profit
                (including anticipated profit), loss of benefit (including
                anticipated benefit), loss of revenue, loss of business, loss of
                goodwill, loss of opportunity, loss of savings (including
                anticipated savings), loss of reputation, loss of use and/or
                loss or corruption of data; (ii) a party’s liability for any
                liability under these Customer Terms will be reduced
                proportionately to the extent the relevant liability was caused
                or contributed to by the acts or omissions of the other party;
                and (iii) our aggregate liability for any liability arising from
                or in connection with these Customer Terms will be limited to us
                resupplying the Services to you, in our sole discretion, to us
                paying you $100.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                This clause will survive the termination or expiry of these
                Customer Terms.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Exclusions to liability</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Despite anything to the contrary, to the maximum extent
                permitted by law, we will not be liable for, and you waive and
                release us from and against, any liability caused or contributed
                to by, arising from or connected with (i) your acts or
                omissions; (ii) any use or application of the Services by a
                person other than you; (iii) any works, services, goods,
                materials or items which do not form part of the Services, or
                which have not been provided by us; (iv) the Services being
                unavailable, or any delay in us providing our services to you,
                for whatever reason; and/or (v) any event outside of our
                reasonable control.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You acknowledge and agree that you use the Site or Services at
                your own risk and the provision of the Site or our Services may
                be contingent on, or impacted by, third parties, suppliers or
                other subcontractors (“Third Party Inputs”), and despite
                anything to the contrary, to the maximum extent permitted by
                law, we will not be responsible and will have no liability for
                any event outside of our reasonable control and for any default
                or breach of these Customer Terms or any law if such default or
                breach was caused or contributed to by any Third Party Inputs.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Termination</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You may terminate your account and these Customer Terms at any
                time via the “cancel subscription” (or similar) feature in your
                account.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                If we have reason to believe you are misusing the Services we
                may terminate your account at any time, by providing you with 30
                days written notice, in which case we will immediately cease
                providing the Services to you. If we terminate your account, we
                will refund you any fees paid in advance by you in connection
                with the unused portion of the Services.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Either party may terminate the Customer Terms on written notice
                to the other party if the other party breaches the Customer
                Terms and such breach is not cured within 20 days after the
                non-breaching party provides notice of the breach or if a party
                is unable to pay their debts as they fall due. We may terminate
                these Customer Terms immediately with written notice to you, if
                we are notified, or reasonably believe, that the Services are
                being used by you, your personnel or an Authorized User in
                violation of any material term or any applicable law.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Upon expiry or termination of these Customer Terms, we will
                immediately cease providing the Services, you are to pay for all
                Services provided prior to termination, including Services that
                have not yet been invoiced to you, and all other amounts due and
                payable under these Customer Terms and we will be entitled to
                permanently delete all Customer Data after the Download Period.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Disputes</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Each party agrees to use its best endeavors to use mediation and
                negotiation to resolve any dispute arising out of or relating to
                these Customer Terms, prior to resorting to an external dispute
                resolution process before commencing court proceedings. If the
                parties are unable to resolve the dispute or agree on an
                alternate method to resolve the dispute, the dispute may be
                referred by either party (by notice in writing to the other
                party) to arbitration in accordance with the Accounting and
                Corporate Regulatory Authority (ACRA) rules. Once a dispute has
                been referred to ACRA, the parties agree to be bound by the
                decision of ACRA. The seat of arbitration will be Singapore. The
                language of the arbitration will be English. The number of
                arbitrators shall be one. The costs of the arbitration will be
                shared equally between the parties. Nothing in this clause will
                operate to prevent a party from seeking urgent injunctive or
                equitable relief from a court of appropriate jurisdiction.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Severability</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                These Customer Terms will be enforced to the fullest extent
                permitted under applicable law. If any provision of these
                Customer Terms is held to be void, invalid, illegal or
                unenforceable, that provision (or that part of the provision)
                will be severed from these Customer Terms and the remaining
                provisions of these Customer Terms will remain in effect.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            We’ll keep the services available
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                We will use commercially reasonable efforts to make the Services
                available 24 hours a day, 7 days a week, excluding, (i) any
                planned downtime; (ii) any unavailability caused or contributed
                to by your actions or the actions of an Authorized User of
                yours; or (iii) any event or circumstance beyond our reasonable
                control. We expect planned downtime to be infrequent but will
                endeavor to provide you with advance notice via the Site if we
                think it may exceed 60 continuous minutes.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Changes to the services</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You agree that we may amend the Services (including any
                features) at any time. If we remove any features that will have
                a material impact on the Services, we will provide written
                notice to you. By continuing to use the Services after the
                notice or 30 days after notification (whichever date is
                earlier), you agree to the amended Services. If you do not agree
                to the amendment outlined in the notice, you may terminate these
                Terms in accordance with the Termination Clause. If you are on
                an annual workspace subscription and you can demonstrate the
                changes to the Services have a material adverse effect on you,
                we will provide you with a pro-rata refund for any unused part
                of your annual workspace subscription.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            Changes to the customer terms
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                We may amend these Customer Terms at any time, by providing
                written notice to you. The amended Customer Terms will come into
                effect when your workspace subscription is next renewed (in
                accordance with the ‘Auto-renewal’ clause above). By continuing
                to use the Services after renewal of your workspace
                subscription, you agree to the amended terms. If you do not
                agree to the amendment, you may terminate these Customer Terms
                in accordance with the Termination clause.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Publicity</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                You agree that we may advertise or publicize the broad nature of
                our provision of the Services to you, including on our website
                or in our promotion material. You grant us a non-exclusive,
                revocable, worldwide, non-sublicensable and non-transferable
                right and license to use your company name and logo as a
                reference for marketing or promotional purposes on our website
                and in other public or private communications with our existing
                or potential customers. You may send an email to us stating that
                you do not wish to be used as a reference and we will cease
                using your name and logo in any marketing or promotional
                material and public or private communication.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Your feedback</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                If you send us any feedback or suggestions regarding the
                Services, there is a chance we will use it. You agree that we
                may use feedback in any manner which we see fit (including to
                develop new features) and no benefit will be due to you as a
                result of any use by us of any feedback. You can contact our
                Customer Support Team to provide this feedback and exercise your
                privacy rights under applicable law.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">
            Relationship of the parties
          </p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                The Customer Terms are not intended to create a partnership,
                franchise, joint venture, agency, fiduciary, or employment
                relationship between the parties.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px]">
          <p className="font-semibold text-[24px]">Governing law</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                Your use of the Services and any dispute arising out of your use
                of it is subject to the laws of Singapore.
              </p>
            </div>
          </div>
        </div>
        <div className="text-[#000049] font-inter px-20 pt-[48px] pb-[156px]">
          <p className="font-semibold text-[24px]">Entire agreement</p>
          <div className="text-[18px] leading-[27px] space-y-4 mt-4">
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>
                The Customer Terms contain the entire agreement between the
                parties and supersedes all prior and contemporaneous agreements,
                proposals or representations, written or oral, concerning its
                subject matter.
              </p>
            </div>
            <div className="flex space-x-0 items-start">
              <li className="list-disc w-[15px]"></li>
              <p>For questions and notices, please email us.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
