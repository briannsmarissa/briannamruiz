export const projectsData = [
  {
    id: "risk-assessment",
    title: "Enterprise Risk Assessment",
    slug: "risk-assessment",
    description: "Conducted a cybersecurity risk assessment using a qualitative 5x5 risk matrix, mapping controls to NIST CSF, CIS Controls, and SOC 2.",
    thumbnail: "/thumbnails/risk_assessment.png", // Will implement a generic or generated one
    frameworks: ["NIST CSF", "CIS Controls", "SOC 2"],
    tags: ["Risk Assessment", "Cybersecurity", "GRC"],
    pdfFile: "/Project/Risk assessment project .pdf",
    overview: "This mock assessment demonstrates a Governance, Risk, and Compliance (GRC) workflow for a fictional mid-sized organization. Risks were identified based on common cybersecurity and operational threats and evaluated using likelihood and business impact.",
    methodology: "The assessment follows a qualitative 5x5 risk matrix. Each risk is assigned a likelihood and impact score, current controls are documented, and mitigation activities are recommended.",
    findings: [
      "Excessive privileged access presents the highest risk.",
      "Delayed patching increases exposure to known vulnerabilities.",
      "Phishing remains a significant business threat requiring continuous awareness training.",
      "Vendor security reviews should be performed annually.",
      "Backup restoration testing should be conducted quarterly."
    ],
    recommendations: [
      "Enforce least privilege and quarterly access reviews.",
      "Automate vulnerability and patch management.",
      "Expand phishing simulations and security awareness training.",
      "Formalize third-party risk management.",
      "Test disaster recovery and business continuity plans annually."
    ]
  },
  {
    id: "soc2-gap",
    title: "SOC 2 Gap Assessment",
    slug: "soc2-gap-assessment",
    description: "Evaluated a fictional organization against SOC 2 Trust Services Criteria for Security and Availability, identifying gaps and creating a remediation roadmap.",
    thumbnail: "/thumbnails/soc2_gap.png",
    frameworks: ["SOC 2"],
    tags: ["Gap Analysis", "Compliance", "SOC 2"],
    pdfFile: "/SOC2 gap assessment .pdf",
    overview: "This assessment evaluates a fictional mid-sized organization against selected SOC 2 Trust Services Criteria. It demonstrates control review, gap identification, remediation planning, ownership, and evidence expectations.",
    methodology: "Reviewed current state against CC1.2, CC6.1, CC6.2, CC7.2, CC7.4, and CC9.2 criteria to find gaps and assign priority ratings.",
    findings: [
      "Overall readiness: 68%.",
      "Organization has foundational security practices but needs stronger evidence retention.",
      "Access recertification, vendor oversight, and incident-response testing require improvement."
    ],
    recommendations: [
      "Automate access termination and quarterly reviews.",
      "Run incident-response tabletop.",
      "Formalize vendor tiering.",
      "Strengthen evidence management."
    ]
  },
  {
    id: "vendor-risk",
    title: "Vendor Risk Assessment",
    slug: "vendor-risk-assessment",
    description: "Created a due-diligence package for evaluating a cloud payroll vendor, combining questionnaire responses with risk scoring.",
    thumbnail: "/thumbnails/vendor_risk.png",
    frameworks: ["Third-Party Risk"],
    tags: ["Vendor Risk", "TPRM", "Due Diligence"],
    pdfFile: "/Vendor risk assessment .pdf",
    overview: "Sample due-diligence package for evaluating a fictional cloud payroll vendor. The model combines questionnaire responses with inherent-risk and control-effectiveness scoring.",
    methodology: "Evaluated vendor using a security questionnaire and scorecard, resulting in a calculated control score of 70% and a Residual Risk of Medium-High.",
    findings: [
      "Vendor lacks recent incident response testing (no tabletop evidence).",
      "Critical subcontractors are only assessed if they are new vendors, lacking annual reassessment."
    ],
    recommendations: [
      "Approve conditionally with a 90-day remediation plan for IR testing and subcontractor oversight.",
      "Require breach notification within 24 hours and secure data deletion at termination."
    ]
  },
  {
    id: "rbac-workbook",
    title: "Access Review (RBAC) Workbook",
    slug: "rbac-workbook",
    description: "Documented a quarterly certification of user and privileged access for a finance application, including segregation of duties analysis.",
    thumbnail: "/thumbnails/rbac_workbook.png",
    frameworks: ["IAM", "Access Control"],
    tags: ["RBAC", "Access Reviews", "Segregation of Duties"],
    pdfFile: "/RBAC Workbook.pdf",
    overview: "This access-review workbook documents a quarterly certification of user and privileged access for a fictional finance application.",
    methodology: "Defined roles (AP Clerk, AP Approver, Finance Admin, Auditor) and reviewed access for 5 accounts, identifying Segregation-of-Duties (SoD) conflicts.",
    findings: [
      "Identified SoD conflict: Vendor creation + payment approval.",
      "Identified SoD conflict: Admin configuration + transaction approval.",
      "Found former contractor with active access."
    ],
    recommendations: [
      "Remove vendor creation from approver role.",
      "Use separate privileged account and prohibit transaction approval.",
      "Revoke contractor access immediately."
    ]
  },
  {
    id: "incident-response",
    title: "Incident Response Plan",
    slug: "incident-response-plan",
    description: "Developed an enterprise response process with a severity matrix and a specific ransomware playbook.",
    thumbnail: "/thumbnails/incident_response.png",
    frameworks: ["Incident Response"],
    tags: ["IRP", "Ransomware", "Security Operations"],
    pdfFile: "/Incident response plan.pdf",
    overview: "This plan defines how the organization prepares for, detects, analyzes, contains, eradicates, and recovers from cybersecurity incidents affecting systems, users, vendors, or regulated information.",
    methodology: "Established roles, responsibilities, and a 5-phase incident lifecycle (Preparation, Detection, Containment, Eradication, Recovery). Created a Severity Matrix (SEV-1 to SEV-4).",
    findings: [
      "Included a comprehensive Ransomware Playbook emphasizing safe disconnection without powering off."
    ],
    recommendations: [
      "Complete after-action reviews within 10 business days.",
      "Maintain tabletop exercises to ensure readiness."
    ]
  },
  {
    id: "bcp",
    title: "Business Continuity & Disaster Recovery Plan",
    slug: "business-continuity-plan",
    description: "Created a BCP/DR plan including business impact analysis, recovery objectives (RTO/RPO), and testing schedules.",
    thumbnail: "/thumbnails/bcp.png",
    frameworks: ["Business Continuity", "Disaster Recovery"],
    tags: ["BCP", "DRP", "Resilience"],
    pdfFile: "/Business Continuity Plan.pdf",
    overview: "Program objective is to maintain critical services during disruption and restore technology in a controlled, prioritized manner for a cloud-hosted environment.",
    methodology: "Performed Business Impact Analysis for Payroll, Customer Support, Finance Reporting, and Identity Services. Defined RTOs and RPOs.",
    findings: [
      "Identity Services requires the lowest RTO (2 hours) and RPO (15 minutes).",
      "Finance Reporting has the highest tolerance (RTO 24 hours)."
    ],
    recommendations: [
      "Implement a disaster recovery sequence prioritizing Identity, DNS, and core network.",
      "Conduct quarterly backup restore tests and annual failover tests."
    ]
  },
  {
    id: "policy-library",
    title: "Security Policy Library",
    slug: "security-policy-library",
    description: "Drafted core organizational policies including Acceptable Use, Password and Authentication, and Access Control.",
    thumbnail: "/thumbnails/policy_library.png",
    frameworks: ["Security Governance"],
    tags: ["Policies", "AUP", "Authentication"],
    pdfFile: "/Security Policy Library .pdf",
    overview: "These sample policies establish minimum security requirements for workforce technology use, authentication, and access control.",
    methodology: "Defined clear policy statements, monitoring expectations, and control requirements (with defined owners and required evidence).",
    findings: [
      "Passwords must be at least 14 characters where supported.",
      "MFA is required for remote, privileged, and sensitive-system access."
    ],
    recommendations: [
      "Review policies annually.",
      "Process joiner, mover, and leaver events promptly.",
      "Exceptions require business justification, risk assessment, and expiration dates."
    ]
  },
  {
    id: "evidence-tracker",
    title: "Audit Evidence Tracker",
    slug: "audit-evidence-tracker",
    description: "Demonstrated GRC audit coordination by tracking control requests, ownership, and evidence quality.",
    thumbnail: "/thumbnails/evidence_tracker.png",
    frameworks: ["Audit Management"],
    tags: ["Evidence Tracking", "Compliance", "Audits"],
    pdfFile: "/Audit Evidence Tracker.pdf",
    overview: "The tracker demonstrates how a GRC analyst coordinates audit requests, confirms evidence quality, manages due dates, and records reviewer approval.",
    methodology: "Defined an Evidence Quality Standard (requiring system context, timestamps, reproducibility) and tracked multiple SOC 2 control requests.",
    findings: [
      "Sample metrics: 60% accepted, 20% in review, 20% overdue or requiring updates."
    ],
    recommendations: [
      "Escalate high-risk overdue items weekly to the control owner and audit sponsor.",
      "Ensure evidence identifies the control, system, owner, period, and population."
    ]
  },
  {
    id: "risk-heatmap",
    title: "Risk Heat Map Dashboard",
    slug: "risk-heat-map",
    description: "Designed an executive risk visualization showing portfolio trends and key risk indicators (KRIs).",
    thumbnail: "/thumbnails/risk_heatmap.png",
    frameworks: ["Risk Management"],
    tags: ["Heat Map", "Executive Dashboard", "KRIs"],
    pdfFile: "/Risk Heat Map.pdf",
    overview: "Executive risk dashboard sample based on eight enterprise risks, utilizing a 5x5 matrix where Risk Score = Likelihood × Impact.",
    methodology: "Mapped risks on a visual heat map. Tracked trends (Improving, Stable, Worsening) and defined Key Risk Indicators.",
    findings: [
      "Excessive user permissions scored highest (20).",
      "Vendor control weakness is worsening (Score 12)."
    ],
    recommendations: [
      "Monitor KRIs such as 'Critical patches within SLA' (Target >= 95%).",
      "Ensure 'Quarterly access reviews complete' reaches 100% target."
    ]
  },
  {
    id: "jira-project",
    title: "Jira Risk & Compliance Project",
    slug: "jira-risk-compliance",
    description: "Configured a realistic Jira-style workflow for tracking GRC findings, remediation tasks, and evidence requests.",
    thumbnail: "/thumbnails/jira_project.png",
    frameworks: ["Workflow Automation"],
    tags: ["Jira", "Ticketing", "Remediation"],
    pdfFile: "/Jira project .pdf",
    overview: "This artifact shows a realistic Jira-style workflow for tracking GRC findings and remediation, acting as a central source of truth for compliance tasks.",
    methodology: "Defined custom Issue Types (Epic, Risk, Control Gap, Remediation Task, Evidence Request) and a workflow (Backlog -> In Analysis -> Remediation -> Validation -> Closed).",
    findings: [
      "Created a sample sprint board with active GRC tickets.",
      "Drafted a sample ticket for removing dormant privileged accounts (GRC-099)."
    ],
    recommendations: [
      "Link all remediation tasks to specific compliance controls (e.g., SOC 2 CC6.1).",
      "Require evidence attachment and owner validation for closure."
    ]
  },
  {
    id: "compliance-crosswalk",
    title: "Compliance Crosswalk",
    slug: "compliance-crosswalk",
    description: "Mapped organizational controls across multiple frameworks including NIST CSF 2.0, CIS Controls v8, and SOC 2.",
    thumbnail: "/thumbnails/compliance_crosswalk.png",
    frameworks: ["NIST CSF", "CIS Controls", "SOC 2"],
    tags: ["Framework Mapping", "Crosswalk", "Compliance"],
    pdfFile: "/Compliance crosswalk.pdf",
    overview: "Demonstrates how one control activity can support multiple frameworks, streamlining the audit process and reducing duplicate effort.",
    methodology: "Mapped specific control activities (e.g., Identity lifecycle management, MFA) to corresponding requirements in NIST CSF, CIS Controls, and SOC 2.",
    findings: [
      "A single control statement (e.g., AC-01 for Access Control) can satisfy identity requirements across all three major frameworks."
    ],
    recommendations: [
      "Start with organizational control language, then map to frameworks.",
      "Maintain version, scope, rationale, and owner in the crosswalk.",
      "Validate mappings against selected framework versions."
    ]
  }
];
