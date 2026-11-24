"""Generates public/rahul-s-resume.pdf. Requires: pip install reportlab.
Replace the generated PDF with your original resume file at any time."""
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Spacer

out = Path(__file__).resolve().parent.parent / "public" / "rahul-s-resume.pdf"
doc = SimpleDocTemplate(str(out), pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm,
                        topMargin=14 * mm, bottomMargin=14 * mm, title="Rahul S - Resume", author="Rahul S")
accent = colors.HexColor("#3b5bdb")
name = ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=22, leading=26)
role = ParagraphStyle("role", fontName="Helvetica", fontSize=10.5, leading=14, textColor=colors.HexColor("#444444"))
h = ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=11, leading=14, textColor=accent, spaceBefore=8, spaceAfter=3)
b = ParagraphStyle("b", fontName="Helvetica", fontSize=9.5, leading=13)
bb = ParagraphStyle("bb", parent=b, fontName="Helvetica-Bold")


def section(title):
    return [Paragraph(title.upper(), h),
            HRFlowable(width="100%", thickness=0.6, color=colors.HexColor("#cccccc"), spaceAfter=4)]


def bullets(items):
    return ListFlowable([ListItem(Paragraph(i, b), leftIndent=10) for i in items],
                        bulletType="bullet", start="•", leftIndent=10, bulletFontSize=8)


s = [Paragraph("Rahul S", name),
     Paragraph("Aspiring Full-Stack Developer · Python Developer · AI &amp; Machine Learning Enthusiast", role),
     Spacer(1, 3),
     Paragraph("rahulsurendrababu45@gmail.com &nbsp;|&nbsp; +91 6363779118 &nbsp;|&nbsp; "
               "Doddaballapura, Karnataka, India &nbsp;|&nbsp; github.com/Rahul-4518", role)]
s += section("Profile")
s += [Paragraph("MCA student with strong foundations in programming, machine learning, IoT, full-stack development, "
                "and data analytics. Passionate about developing AI-driven applications and solving real-world "
                "problems through technology.", b)]
s += section("Technical Skills")
for k, v in [("Programming", "Python, Java, SQL"),
             ("Web Development", "HTML, CSS, JavaScript, Full-Stack Development"),
             ("AI &amp; Machine Learning", "Machine Learning, Deep Learning, NLP, OpenCV"),
             ("Other", "IoT, Data Analytics")]:
    s.append(Paragraph(f"<b>{k}:</b> {v}", b))
s += section("Experience")
s += [Paragraph("Intern — Askey, Bengaluru &nbsp;&nbsp;<font color='#666666'>June 2024 – June 2024</font>", bb),
      bullets(["Developed an OMR processing system using Python and OpenCV.",
               "Implemented auto-alignment algorithms and layout customization.",
               "Improved evaluation accuracy by 25%.", "Reduced processing time by 40%."])]
s += section("Projects")
for t, d in [("Audio-to-Business-Intelligence Pipeline",
              "AI-powered pipeline converting business audio into actionable insights using Speech-to-Text and NLP "
              "for transcription, summarization, and analytics."),
             ("Plant Disease Risk Prediction",
              "Random Forest model predicting plant disease risk with 87% accuracy using agricultural environmental data."),
             ("Construction Supply Hub",
              "Full-stack web application for construction material management, including inventory tracking and "
              "procurement management."),
             ("Automatic Waste Classification Using Deep Learning",
              "Deep learning research project on automatic waste classification and intelligent waste management."),
             ("OMR Processing System",
              "Optical Mark Recognition system built with Python and OpenCV (github.com/Rahul-4518/OMR).")]:
    s.append(Paragraph(f"<b>{t}</b> — {d}", b))
    s.append(Spacer(1, 2))
s += section("Education")
s += [Paragraph("<b>Master of Computer Applications (MCA)</b> — Amity University Bengaluru &nbsp;"
                "<font color='#666666'>November 2024</font> &nbsp;|&nbsp; CGPA: 8.7", b),
      Paragraph("<b>Bachelor of Computer Applications (BCA)</b> — Nagarjuna College of Management Studies &nbsp;"
                "<font color='#666666'>August 2021 – July 2024</font> &nbsp;|&nbsp; CGPA: 9.1", b)]
s += section("Certifications")
s += [bullets(["Programming in Java – NPTEL (SWAYAM)", "Introduction to SQL – Udemy",
               "Cyber Security Workshop – Karnataka Science and Technology Academy",
               "AI-Powered Cybersecurity for RBI's Vision 2025 – Amity University"])]
s += section("Leadership &amp; Achievements")
s += [bullets(["Sports Coordinator, Nagarjuna College of Management Studies.",
               "Secretary of CodeZen, the official Coding Club of Amity University Bengaluru; organized coding "
               "activities and technical events.",
               "Won Volleyball, Tug of War, and Discus Throw competitions at Sangathan.",
               "Presented a university-level research paper on Automatic Waste Classification Using Deep Learning."])]
doc.build(s)
print("written", out)
